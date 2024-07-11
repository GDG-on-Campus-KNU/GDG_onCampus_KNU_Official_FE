import { AxiosError } from 'axios';

import { instanceJWT } from '@gdsc/apis/Api_JWT';

export const ApplyInquiryAPI = async (name: string, studentNumber: string) => {
  try {
    const response = await instanceJWT.get(
      `/api/application?name=${name}&studentNumber=${studentNumber}`
    );
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 409) {
        console.error('Failed to fetch theme products:', err);
        throw new Error('최종지원된 서류는 확인하실 수 없습니다.');
      } else {
        console.error('Failed to fetch theme products:', err);
        throw new Error(
          'Failed to fetch theme products. Please try again later.'
        );
      }
    } else {
      console.error('An unexpected error occurred:', err);
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};
