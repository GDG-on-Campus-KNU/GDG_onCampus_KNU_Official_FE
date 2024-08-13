import Text from '@gdsc/components/common/typography/Text';

import { applyDocsInterface } from '@gdsc/apis/hooks/admin/useGetApplyDocs';

import styled from '@emotion/styled';
import { Track } from '@gdsc/types/AdminInterface';

type Props = {
  data: applyDocsInterface;
  track: Track | '';
  applyData: number;
  setTrack: (track: Track | '') => void;
};

const SelectBtn = styled.button<{ isClicked: boolean }>`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;
  border-bottom: ${({ isClicked }) => (isClicked ? '4px' : '1px')} solid white;
  padding: 10px 20px;
  background-color: var(--color-revolver);
  color: white;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
`;

const SelectBox = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem auto;
  flex-direction: row;
  background-color: var(--color-halti);
  justify-content: space-between;
`;

const TrackSelectButtons = ({ data, track, setTrack, applyData }: Props) => {
  const response = data?.data;

  const frontend =
    response?.filter((item) => item.track === 'FRONT_END').length || 0;
  const backend =
    response?.filter((item) => item.track === 'BACK_END').length || 0;
  const aos = response?.filter((item) => item.track === 'ANDROID').length || 0;
  const ai = response?.filter((item) => item.track === 'AI').length || 0;
  const designer =
    response?.filter((item) => item.track === 'DESIGNER').length || 0;

  const handleTrackSelect = (selectedTrack: Track | '') => {
    setTrack(selectedTrack);
  };
  return (
    <SelectBox>
      <SelectBtn isClicked={track === ''} onClick={() => handleTrackSelect('')}>
        <Text color='white' weight='500'>
          전체
        </Text>
        <Text color='var(--color-selective)'>{applyData}</Text>
      </SelectBtn>
      <SelectBtn
        isClicked={track === 'FRONT_END'}
        onClick={() => handleTrackSelect('FRONT_END')}
      >
        <Text color='white' weight='500'>
          프론트엔드
        </Text>
        <Text color='var(--color-selective)'>{frontend}</Text>
      </SelectBtn>
      <SelectBtn
        isClicked={track === 'BACK_END'}
        onClick={() => handleTrackSelect('BACK_END')}
      >
        <Text color='white' weight='500'>
          백엔드
        </Text>
        <Text color='var(--color-selective)'>{backend}</Text>
      </SelectBtn>
      <SelectBtn
        isClicked={track === 'ANDROID'}
        onClick={() => handleTrackSelect('ANDROID')}
      >
        <Text color='white' weight='500'>
          안드로이드
        </Text>
        <Text color='var(--color-selective)'>{aos}</Text>
      </SelectBtn>
      <SelectBtn
        isClicked={track === 'AI'}
        onClick={() => handleTrackSelect('AI')}
      >
        <Text color='white' weight='500'>
          AI
        </Text>
        <Text color='var(--color-selective)'>{ai}</Text>
      </SelectBtn>
      <SelectBtn
        isClicked={track === 'DESIGNER'}
        onClick={() => handleTrackSelect('DESIGNER')}
      >
        <Text color='white' weight='500'>
          디자이너
        </Text>
        <Text color='var(--color-selective)'>{designer}</Text>
      </SelectBtn>
    </SelectBox>
  );
};

export default TrackSelectButtons;
