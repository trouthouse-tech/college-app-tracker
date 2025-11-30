/**
 * Formats a raw phone number string (digits only) to US format: (XXX) XXX-XXXX
 * @param phone - Raw digits (e.g., "6507232300")
 * @returns Formatted phone string (e.g., "(650) 723-2300")
 */
export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, '').slice(0, 10);

  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

