import { instanceJWT } from '@gdsc/apis/Api_JWT';

import { ApplyFormInterface } from '@gdsc/types/ApplyInterface';

export const ApplyAPI = async (formData: ApplyFormInterface): Promise<void> => {
  try {
    const response = await instanceJWT.post('/api/application', formData);

    return response.data;
  } catch (err) {
    throw err;
  }
};
