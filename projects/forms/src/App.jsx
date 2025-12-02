// import LoginFormUncontrolled from "./components/LoginFormUncontrolled";
import LoginFormControlled from "./components/LoginFormControlled";

import './App.css';

function App() {
   return (
      <div className="app">
         <h1>Forms</h1>
         {/* <h2>Uncontrolled form</h2>
         <LoginFormUncontrolled /> */}

         <LoginFormControlled
            onLogin={(formData) => {
               console.log(formData);
            }}
         />
      </div>
   );
}

export default App;
