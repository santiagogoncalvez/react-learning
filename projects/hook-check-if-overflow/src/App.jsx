import { useRef } from "react";
import { useIsOverflow } from "./hooks/useIsOverflow.js";

function App() {
   const ref = useRef();
   const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {
      console.log(isOverflowFromCallback);
   });

   console.log(isOverflow);

   return (
      <div style={{ overflow: "auto", width: "1000px" }} ref={ref}>
         <div style={{ minWidth: "900px" }}>Hello React</div>
      </div>
   );
}

export default App;
