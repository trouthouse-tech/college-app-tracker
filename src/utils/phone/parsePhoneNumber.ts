/**
 * Parses a phone input and extracts only digits, limited to 10 characters
 * @param input - Raw input from user (may include formatting characters)
 * @returns Clean digits string, max 10 characters (e.g., "6507232300")
 */
export const parsePhoneNumber = (input: string): string => {
  return input.replace(/\D/g, '').slice(0, 10);
};

