import { useReducer } from "react";

import List from "./components/List.jsx";

const initialList = [
   {
      id: "a",
      firstname: "Robin",
      lastname: "Wieruch",
      year: 1988,
   },
   {
      id: "b",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
   },
];

const listReducer = (state, action) => {
   switch (action.type) {
      case "REMOVE_ITEM": {
         return {
            ...state,
            list: state.list.filter((item) => item.id !== action.id),
         };
      }
      default:
         throw new Error();
   }
};

function App() {
   const [listData, dispatchListData] = useReducer(listReducer, {
      list: initialList,
      isShowList: true,
   });

   const handleToggleComplete = (id) => {
      dispatchListData({ type: "REMOVE_ITEM", id });
   };

   if (!listData.isShowList) return null;

   return <List list={listData.list} onRemove={handleToggleComplete} />;
}

export default App;
