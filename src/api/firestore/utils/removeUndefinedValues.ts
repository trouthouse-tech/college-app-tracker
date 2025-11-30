/**
 * Removes undefined values from an object.
 * Firebase does not accept undefined values in documents.
 * 
 * @param obj - The object to clean
 * @returns A new object with undefined values removed
 */
export const removeUndefinedValues = <T extends Record<string, any>>(obj: T): Partial<T> => {
  const cleaned: any = {};
  
  for (const key in obj) {
    if (obj[key] !== undefined) {
      cleaned[key] = obj[key];
    }
  }
  
  return cleaned;
};

