import { z } from 'zod';

export type ApplyFormSchemaType = z.infer<typeof ApplyFormSchema>;

export const ApplyFormSchema = z.object({
  techStack: z.string(),
  links: z.string(),
  track: z.string(),
  answers: z.array(
    z.object({
      questionNumber: z.number(),
      answer: z.string(),
    })
  ),
});
