import { useReducer, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import AddItem from './components/AddItem.jsx';
import List from './components/List.jsx'

const initialList = [
   {
      id: "a",
      name: "Robin",
   },
   {
      id: "b",
      name: "Dennis",
   },
];

const listReducer = (state, action) => {
   switch (action.type) {
      case "ADD_ITEM":
         return {
            ...state,
            list: state.list.concat({ name: action.name, id: action.id }),
         };
      default:
         throw new Error();
   }
};

function App() {
   const [listData, dispatchListData] = useReducer(listReducer, {
      list: initialList,
      isShowList: true,
   });
   const [name, setName] = useState("");

   
   const handleChange = (event) => {
      // Rastrear el estado del campo de entrada
      setName(event.target.value);
   };
   const handleAdd = () => {
      // Añadir artículo
      dispatchListData({ type: "ADD_ITEM", name, id: uuidv4() });
      setName("");
   };

   return (
      <div>
         <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

         <List list={listData.list} />
      </div>
   );
}

export default App;
