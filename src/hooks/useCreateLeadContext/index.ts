import { useContext } from 'react';

import { CreateLeadContext } from '@/context/CreateLeadContext'; // Import the context you created

/**
 * useCreateLeadContext
 *
 * @description A custom hook that returns create lead context.
 * @returns The create lead context object.
 */
export const useCreateLeadContext = () => {
  const context = useContext(CreateLeadContext);

  if (!context) {
    throw new Error('useCreateLeadContext must be used within a ProductTrackerProvider');
  }

  return context;
};
