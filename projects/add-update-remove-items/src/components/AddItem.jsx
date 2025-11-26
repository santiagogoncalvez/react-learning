import InputWithLabel from './InputWithLabel';
import { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <InputWithLabel
        id="search"
        type="text"
        value={value}
        onInputChange={(event) => setValue(event.target.value)}
      >
        <strong>Add item:</strong>
      </InputWithLabel> 
      <button
        onClick={() => {
          addItem(value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
