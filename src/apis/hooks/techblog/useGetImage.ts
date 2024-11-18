import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { useMutation } from '@tanstack/react-query';

type imageResponse = {
  imageUrl: string;
};

const imageUploadPath = () => '/api/post/image';

export const getImage = async (imageFile: File): Promise<imageResponse> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetchInstance.post<imageResponse>(
    imageUploadPath(),
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
};

export const useGetImage = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  const mutation = useMutation<imageResponse, Error, File>({
    mutationFn: async (imageFile) => {
      if (!accessToken) {
        return Promise.reject(new Error('액세스 토큰이 없습니다.'));
      }
      return await getImage(imageFile);
    },
  });

  return mutation;
};
