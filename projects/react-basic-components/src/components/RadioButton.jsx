const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        name="radio-group"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
