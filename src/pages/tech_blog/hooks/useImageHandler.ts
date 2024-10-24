import { useCallback } from 'react';
import Resizer from 'react-image-file-resizer';

import { useGetImage } from '@gdg/apis/hooks/techblog/useGetImage';

const useImageHandler = () => {
  const { mutateAsync } = useGetImage();

  const resizeImage = (file: File) =>
    new Promise<File>((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        'JPEG',
        100,
        0,
        (uri) => {
          if (typeof uri === 'string') {
            fetch(uri)
              .then((response) => response.blob())
              .then((blob) => {
                const newFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                });
                resolve(newFile);
              })
              .catch(reject);
          } else {
            resolve(uri as File);
          }
        },
        'file'
      );
    });

  const handleImage = useCallback(
    async (file: File, callback: (url: string) => void) => {
      try {
        const resizedImage = await resizeImage(file);
        const response = await mutateAsync(resizedImage);
        callback(response.imageUrl);
      } catch (error) {
        console.error('이미지 업로드 중 오류가 발생했습니다:', error);
      }
    },
    [mutateAsync]
  );

  return { handleImage };
};

export default useImageHandler;
