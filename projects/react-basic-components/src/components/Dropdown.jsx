import { useState, useCallback } from 'react';

const Dropdown = ({ options, label, selectedOption }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  const handleSelectOption = useCallback(
    (option) => {
      selectedOption(option);
      setOpen(false);
    },
    [selectedOption],
  );

  return (
    <div>
      {/* Botón que abre las opciones */}
      <button aria-expanded={open} aria-haspopup="listbox" onClick={handleOpen}>
        {label}
      </button>
      {/* Opciones que se renderizan condicionalmente */}
      {open && (
        <ul role="listbox">
          {options.map((option) => {
            return (
              <li key={option.objectID} role="option">
                <button
                  type="button"
                  onClick={() => {
                    handleSelectOption(option.title);
                  }}
                >
                  {option.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
