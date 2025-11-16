const Checkbox = ({ label, value, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => onChange(value)} // pasamos el valor nuevo al padre
      />
      {label}
    </label>
  );
};

export default Checkbox;
