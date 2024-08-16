import { z } from 'zod';

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: '🚨 이름은 필수로 입력해주셔야 합니다.' }),
  age: z
    .number({
      invalid_type_error: '🚨 나이는 숫자형식으로 입력해주셔야 합니다.',
    })
    .min(1, { message: '🚨 나이는 1살부터 입력이 가능합니다.' }),
  studentNumber: z
    .string()
    .min(10, { message: '🚨 학번을 10자리로 입력해주세요.' })
    .max(10, { message: '🚨 학번을 10자리로 입력해주세요.' }),
  major: z
    .string()
    .min(1, { message: '🚨 전공을 필수로 입력해주셔야 합니다.' }),
  phoneNumber: z.string().regex(/^\d{3}-\d{4}-\d{4}$/, {
    message: '🚨 올바른 전화번호 형식을 입력해주세요. 예: 000-0000-0000',
  }),
});
