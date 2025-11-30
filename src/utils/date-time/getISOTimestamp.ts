/**
 * Returns the current date/time as an ISO 8601 string
 * @returns ISO timestamp string (e.g., "2024-01-15T10:30:00.000Z")
 */
export const getISOTimestamp = (): string => {
  return new Date().toISOString();
};

