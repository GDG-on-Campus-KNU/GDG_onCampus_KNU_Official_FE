import { useState } from 'react';

import { TrackInterface } from '@gdg/apis/hooks/admin/docs/useGetTrack';
import Text from '@gdg/components/common/typography/Text';

import { SelectBarWrapper, TrackBtnStyle } from './TrackSelectBar.style';

interface ITrackButton {
  onClick?: () => void;
  isSelected: boolean;
  text: string;
  peopleNumber?: number;
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
      {peopleNumber && (
        <Text size='md' color='yellow'>
          {peopleNumber}
        </Text>
      )}
    </TrackBtnStyle>
  );
};

const TrackSelectBar = ({
  tracks,
  tracksKorean,
  trackData,
  onSelect,
}: {
  tracks: string[];
  tracksKorean: string[];
  trackData?: TrackInterface;
  onSelect: (index: number) => void;
}) => {
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
          text={tracksKorean[index]}
          peopleNumber={trackData && trackData[track]}
        />
      ))}
    </SelectBarWrapper>
  );
};

export default TrackSelectBar;
