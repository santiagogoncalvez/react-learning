const List = ({ list, onToggleComplete }) => {
   return (
      <ul>
         {list.map((item) => (
            <li key={item.id}>
               <span
                  style={{
                     textDecoration: item.isComplete ? "line-through" : "none",
                  }}
               >
                  {item.task}
               </span>
               <button type="button" onClick={() => onToggleComplete(item.id)}>
                  {item.isComplete ? "Undo" : "Done"}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default List;
