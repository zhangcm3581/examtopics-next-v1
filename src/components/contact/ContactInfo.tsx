'use client';

import { ContactMethod } from './ContactMethod';
import { contactMethods } from '@/lib/constants/contact';
import { useTranslations } from '@/hooks/useTranslations';

export function ContactInfo() {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <p className="text-center text-gray-600 mb-8">
        {t.contact.description}
      </p>

      <div className="space-y-6">
        {contactMethods.map((method) => (
          <ContactMethod
            key={method.type}
            icon={method.icon}
            type={method.type}
            value={method.value}
          />
        ))}
      </div>

      <p className="text-center text-gray-600 mt-8">
        {t.contact.response}
      </p>
    </div>
  );
}