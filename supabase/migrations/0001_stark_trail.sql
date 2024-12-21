/*
  # Exam Practice Platform Schema

  1. New Tables
    - exams: Stores certification exam metadata
    - questions: Stores exam questions and answers
    - user_progress: Tracks user progress for each exam
    - user_answers: Records user's answers and attempts

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create exam providers enum
CREATE TYPE exam_provider AS ENUM ('AWS', 'Google', 'Cisco');

-- Create exams table
CREATE TABLE IF NOT EXISTS exams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  code text NOT NULL UNIQUE,
  provider exam_provider NOT NULL,
  description text NOT NULL,
  total_questions integer NOT NULL,
  passing_score integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id uuid REFERENCES exams(id) ON DELETE CASCADE,
  question_number integer NOT NULL,
  content text NOT NULL,
  options jsonb NOT NULL,
  correct_answer text NOT NULL,
  explanation text NOT NULL,
  references jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(exam_id, question_number)
);

-- Create user progress table
CREATE TABLE IF NOT EXISTS user_progress (
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_id uuid REFERENCES exams(id) ON DELETE CASCADE,
  questions_attempted integer DEFAULT 0,
  correct_answers integer DEFAULT 0,
  last_attempted timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, exam_id)
);

-- Create user answers table
CREATE TABLE IF NOT EXISTS user_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id uuid REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer text NOT NULL,
  is_correct boolean NOT NULL,
  attempted_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view exams"
  ON exams FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view questions"
  ON questions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view their own progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own answers"
  ON user_answers FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can submit their answers"
  ON user_answers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);