import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { postTeamToken } from '@gdsc/apis/hooks/admin/team/postTeamToken';
import { useGetAllTeamToken } from '@gdsc/apis/hooks/admin/team/useGetAllTeamToken';

import { ModalBackdrop, ModalOverlay } from '@gdsc/styles/GlobalModal.style';

import ModalContent from './ModalContent';

type TrackType = 'FRONT_END' | 'BACK_END' | 'ANDROID' | 'AI' | 'DESIGNER';

export type FormData = {
  teamName: string;
  track: TrackType;
};

const CreateTeamModal = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const { refetch } = useGetAllTeamToken();
  const [isStudy, setIsStudy] = useState<boolean | null>(null);

  const onSubmit = async (data: FormData) => {
    const { teamName, track } = data;

    await postTeamToken({ teamName, track });
    await onClose();
    refetch();
  };

  const handleStudyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsStudy(event.target.value === 'yes');
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalBackdrop onClick={onClose} />
      <ModalContent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onClose={onClose}
        isStudy={isStudy}
        handleStudyChange={handleStudyChange}
      />
    </ModalOverlay>
  );
};

export default CreateTeamModal;
