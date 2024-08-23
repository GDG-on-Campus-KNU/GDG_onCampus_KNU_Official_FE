import { useState } from 'react';

const useSelectButtons = (options: string[]) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => () => {
    if (index < 0 || index >= options.length) return;
    setSelected(index);
  };

  const isSelected = (index: number) => selected === index;

  const title = options[selected];

  const selectMenu = options.map((title, index) => ({
    text: title,
    onClick: handleSelect(index),
    isSelected: isSelected(index),
  }));

  return { isSelected, selectMenu };
};

export default useSelectButtons;
