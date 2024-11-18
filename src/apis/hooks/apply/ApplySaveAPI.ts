import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { ApplyFormInterface } from '@gdg/types/ApplyInterface';

export const ApplySaveAPI = async (
  formData: ApplyFormInterface
): Promise<void> => {
  try {
    const response = await fetchInstance.patch('/api/application', formData);

    return response.data;
  } catch (err) {
    throw err;
  }
};
