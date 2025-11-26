import { useReducer } from "react";

import List from "./components/List.jsx";

const initialList = [
   {
      id: "a",
      task: "Learn React",
      isComplete: false,
   },
   {
      id: "b",
      task: "Learn GraphQL",
      isComplete: true,
   },
];

const listReducer = (state, action) => {
   switch (action.type) {
      case "UPDATE_ITEM": {
         const newList = state.list.map((item) => {
            if (item.id === action.id) {
               const updateItem = {
                  ...item,
                  isComplete: !item.isComplete,
               };

               return updateItem;
            }

            return item;
         });

         return {
            ...state,
            list: newList,
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
      dispatchListData({ type: "UPDATE_ITEM", id });
   };

   if (!listData.isShowList) return null;

   return <List list={listData.list} onToggleComplete={handleToggleComplete} />;
}

export default App;
