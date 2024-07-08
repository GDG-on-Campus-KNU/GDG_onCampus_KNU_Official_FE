import { z } from 'zod';

export type ApplyFormSchemaType = z.infer<typeof ApplyFormSchema>;

export const ApplyFormSchema = z.object({
  name: z.string().min(1, { message: '이름은 필수로 입력해주셔야 합니다.' }),
  studentNumber: z
    .string()
    .min(10, { message: '학번을 10자리로 입력해주세요. 예: 2024000000' })
    .max(10, { message: '학번을 10자리로 입력해주세요. 예: 2024000000' }),
  major: z.string().min(1, { message: '전공을 필수로 입력해주셔야 합니다.' }),
  email: z
    .string()
    .min(1, { message: '이메일은 필수로 입력해주셔야 합니다.' })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: '올바른 이메일 형식을 입력해주세요. 예: 000@000.com',
    }),
  phoneNumber: z.string().regex(/^\d{3}-\d{4}-\d{4}$/, {
    message: '올바른 전화번호 형식을 입력해주세요. 예: 000-0000-0000',
  }),
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
