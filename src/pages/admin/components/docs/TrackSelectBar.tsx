import { TrackInterface } from '@gdg/apis/hooks/admin/docs/useGetTrack';
import Text from '@gdg/components/common/typography/Text';
import { useState } from 'react';

import { SelectBarWrapper, TrackBtnStyle } from './TrackSelectBar.style';

interface ITrackButton {
  onClick?: () => void;
  isSelected: boolean;
  text: string;
  peopleNumber: number;
}

const TrackButton = ({
  onClick,
  isSelected,
  text,
  peopleNumber,
}: ITrackButton) => {
  return (
    <TrackBtnStyle onClick={onClick} $isSelected={isSelected}>
      <Text size='md' color='white' weight='bold'>
        {text}
      </Text>
      <Text size='md' color='yellow'>
        {peopleNumber}
      </Text>
    </TrackBtnStyle>
  );
};

const TrackSelectBar = ({
  trackData,
  onSelect,
}: {
  trackData: TrackInterface;
  onSelect: (index: number) => void;
}) => {
  const tracks = [
    'TOTAL',
    'FRONT_END',
    'BACK_END',
    'ANDROID',
    'AI',
    'DESIGNER',
  ];
  const tracks_korean = [
    '전체',
    '프론트엔드',
    '백엔드',
    '안드로이드',
    'AI',
    '디자이너',
  ];

  const [selected, setSelected] = useState<number>(0);
  const handleSelect = (index: number) => () => {
    if (index < 0 || index >= tracks.length) return;
    setSelected(index);
    onSelect(index);
  };

  const isSelected = (index: number) => selected === index;

  return (
    <SelectBarWrapper>
      {tracks.map((track, index) => (
        <TrackButton
          key={index + 1}
          onClick={handleSelect(index)}
          isSelected={isSelected(index)}
          text={tracks_korean[index]}
          peopleNumber={trackData[track]}
        />
      ))}
    </SelectBarWrapper>
  );
};

export default TrackSelectBar;
