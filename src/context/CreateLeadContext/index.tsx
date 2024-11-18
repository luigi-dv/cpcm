import { createContext } from 'react';

import { CreateLeadContextInterface } from '@/types/context';

/**
 * Create Lead  Context
 *
 * @description The context for  create lead.
 */
export const CreateLeadContext = createContext<CreateLeadContextInterface | undefined>(undefined);
