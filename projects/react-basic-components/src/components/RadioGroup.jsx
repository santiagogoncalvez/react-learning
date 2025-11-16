import RadioButton from './RadioButton.jsx';

import { useState } from 'react';

const RadioGroup = ({ options }) => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {options.map((option) => {
        const valueName = option.title;
        return (
          <RadioButton
            key={option.objectID}
            value={valueName}
            label={valueName}
            checked={value === valueName}
            onChange={() => {
              handleChange(valueName);
            }}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
