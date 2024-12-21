export const metadata = {
  title: '联系我们 - ExamTopics',
  description: '联系ExamTopics团队获取帮助和支持',
};

import { ContactInfo } from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">联系我们</h1>
        <ContactInfo />
      </div>
    </div>
  );
}