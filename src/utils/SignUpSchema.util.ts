import { z } from 'zod';

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: '🚨 이름은 필수로 입력해주셔야 합니다.' }),
  age: z
    .number({
      invalid_type_error: '🚨 나이는 필수로 입력해주셔야 합니다.',
    })
    .min(1, { message: '🚨 나이는 1살부터 입력이 가능합니다.' }),
  studentNumber: z
    .string()
    .min(10, { message: '🚨 학번을 10자리로 입력해주세요.' })
    .max(10, { message: '🚨 학번을 10자리로 입력해주세요.' }),
  major: z
    .string()
    .min(1, { message: '🚨 전공을 필수로 입력해주셔야 합니다.' }),
});
