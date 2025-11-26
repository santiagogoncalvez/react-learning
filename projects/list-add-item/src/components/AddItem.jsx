const AddItem = ({ name, onChange, onAdd }) => {
   return (
      <div>
         <input type="text" value={name} onChange={onChange} />
         <button type="button" onClick={onAdd}>
            Add
         </button>
      </div>
   );
};

export default AddItem;