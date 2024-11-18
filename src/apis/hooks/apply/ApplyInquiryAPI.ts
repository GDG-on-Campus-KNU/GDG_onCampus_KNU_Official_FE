import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import type { ErrorInterface } from '@gdg/types/ErrorInterface';

export const ApplyInquiryAPI = async (name: string, studentNumber: string) => {
  try {
    const response = await fetchInstance.get(
      `/api/application?name=${name}&studentNumber=${studentNumber}`
    );
    return response.data;
  } catch (err: unknown) {
    if (typeof err === 'object' && err !== null && 'code' in err) {
      const typedError = err as ErrorInterface;
      if (typedError.code === 409) {
        alert('최종지원된 서류는 확인하실 수 없습니다.');
        throw new Error('최종지원된 서류는 확인하실 수 없습니다.');
      } else if (typedError.code === 403) {
        alert('본인이 아닌 지원자의 서류는 확인하실 수 없습니다.');
        throw new Error('본인이 아닌 지원자의 서류는 확인하실 수 없습니다.');
      } else {
        alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    }
    throw new Error('아직 서류를 제출하지 않으셨습니다.');
  }
};
