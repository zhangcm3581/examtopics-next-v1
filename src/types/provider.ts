/**
 * Represents an exam link with basic information
 */
export interface ExamLink {
    /**
     * Unique identifier for the exam
     */
    id: string;
  
    /**
     * Display title of the exam
     */
    title: string;
  }
  
  /**
   * Represents a certification provider (e.g., AWS, Cisco)
   */
  export interface Provider {
    /**
     * Unique identifier for the provider
     */
    id: string;
  
    /**
     * Display title of the provider
     */
    title: string;
  
    /**
     * Path to the provider's logo image
     */
    logo: string;
  
    /**
     * Link to view all exams from this provider
     */
    allExamsLink: string;
  
    /**
     * List of available exams from this provider
     */
    examLinks: ExamLink[];
  }
  
  /**
   * Type for supported languages
   */
  export type ProviderLanguage = 'en' | 'zh';
  
  /**
   * Function type for getting providers by language
   */
  export type GetProvidersByLanguage = (language: ProviderLanguage) => Provider[];