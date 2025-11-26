const List = ({ list, onRemove }) => {
   return (
      <ul>
         {list.map((item) => (
            <li key={item.id}>
               <span>{item.firstname}</span>
               <span>{item.lastname}</span>
               <span>{item.year}</span>
               <button
                  type="button"
                  onClick={() => {
                     onRemove(item.id);
                  }}
               >
                  Remove
               </button>
            </li>
         ))}
      </ul>
   );
};

export default List;
