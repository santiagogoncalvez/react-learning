// Uncontrolled form
function LoginFormUncontrolled() {
   const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;

      console.log(email, password);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
         </div>

         <div>
            <label htmlFor="pasword">Pasword</label>
            <input id="password" type="password" />
         </div>

         <button>Submit</button>
      </form>
   );
}

export default LoginFormUncontrolled;
