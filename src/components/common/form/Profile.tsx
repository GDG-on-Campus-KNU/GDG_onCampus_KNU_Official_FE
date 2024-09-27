import { useState, useRef, ChangeEvent } from 'react';

import styled from '@emotion/styled';
import DefaultProfile from '@gdg/assets/DefaultProfile.svg';
import PencilIcon from '@gdg/assets/EditIcon.svg';
import { displayCenter } from '@gdg/styles/LayoutStyle';

const ProfileContainer = styled.div`
  ${displayCenter}
  align-items: center;
  position: relative;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  background-color: var(--color-que);
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
`;

const EditBtn = styled.label`
  ${displayCenter}
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;

  width: 32px;
  height: 32px;

  background-color: var(--color-white);

  border: none;
  border-radius: 50%;
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
  }
`;

const EditIcon = styled.img`
  color: var(--color-revolver);
`;

const InputFile = styled.input`
  display: none;
`;

const Profile = () => {
  const [profileImage, setProfileImage] = useState(DefaultProfile);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileImage(result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      <ProfileImg src={profileImage} alt='profile' />
      <EditBtn htmlFor='upload-input'>
        <EditIcon src={PencilIcon} alt='edit' />
      </EditBtn>
      <InputFile
        type='file'
        id='upload-input'
        ref={inputFileRef}
        onChange={handleImageUpload}
      />
    </ProfileContainer>
  );
};

export default Profile;
