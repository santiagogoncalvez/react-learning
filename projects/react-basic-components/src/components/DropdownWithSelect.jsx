const DropdownWithSelect = ({ options, label, name }) => {
  return (
    <label>
      {label}
      &nbsp;
      <select name={name}>
        {options.map((option) => {
          return (
            <option key={option.objectID} value={option.title}>
              {option.title}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default DropdownWithSelect;
