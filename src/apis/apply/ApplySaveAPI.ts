import { instance } from '@gdsc/apis/Api';

import { ApplyFormInterface } from '@gdsc/interface/ApplyInterface';

export const ApplySaveAPI = async (
  formData: ApplyFormInterface
): Promise<void> => {
  try {
    const response = await instance.put('/api/application', formData);

    return response.data;
  } catch (err) {
    throw err;
  }
};
