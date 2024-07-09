import { instance } from '@gdsc/apis/Api';

export const ApplyInquiryAPI = async (name: string, studentNumber: string) => {
  try {
    const response = await instance.get(
      `/api/application?name=${name}&studentNumber=${studentNumber}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
