import { useState, useCallback } from 'react';

import Checkbox from './Checkbox.jsx';

const CheckboxGroup = ({ options }) => {
  const [checkedList, setCheckedList] = useState(new Set([]));

  const handleChange = useCallback((option) => {
    setCheckedList((prevList) => {
      const newList = new Set(prevList);
      if (prevList.has(option)) {
        newList.delete(option);
      } else {
        newList.add(option);
      }
      return newList;
    });
  }, []);

  return (
    <div>
      {options.map((option) => {
        const valueName = option.title;
        return (
          <Checkbox
            key={option.objectID}
            label={valueName}
            value={valueName}
            checked={checkedList.has(valueName)}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
