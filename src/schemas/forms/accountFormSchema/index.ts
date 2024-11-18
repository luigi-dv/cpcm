import { z } from 'zod';

const accountFormSchema = z.object({
  email: z.string().email('Please insert a valid email'),
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  language: z.string({
    required_error: 'Please select a language.',
  }),
});

export default accountFormSchema;
