import { useState } from "react";

const INPUTS_ID = {
   EMAIL: "email",
   PASSWORD: "password",
};

const INITIAL_STATE = {
   [INPUTS_ID.EMAIL]: "",
   [INPUTS_ID.PASSWORD]: "",
};

const VALIDATION = {
   [INPUTS_ID.EMAIL]: [
      {
         isValid: (value) => !!value,
         message: "Is required.",
      },
      {
         isValid: (value) => /\S+@\S+\.\S+/.test(value),
         message: "Needs to be an email.",
      },
   ],
   [INPUTS_ID.PASSWORD]: [
      {
         isValid: (value) => !!value,
         message: "Is required.",
      },
   ],
};

const getDirtyFields = (form) =>
   Object.keys(form).reduce((acc, key) => {
      const isDirty = form[key] !== INITIAL_STATE[key];

      return { ...acc, [key]: isDirty };
   }, {});

const getErrorFields = (form) =>
   Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;

      const errorsPerField = VALIDATION[key]
         // get a list of potential errors for each field
         // by running through all the checks
         .map((validation) => ({
            isValid: validation.isValid(form[key]),
            message: validation.message,
         }))
         // only keep the errors
         .filter((errorPerField) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
   }, {});

// Controlled form
function LoginFormControlled({ onLogin }) {
   const [form, setForm] = useState(INITIAL_STATE);

   const errorFields = getErrorFields(form);
   const hasErrors = Object.values(errorFields).flat().length > 0;
   const dirtyFields = getDirtyFields(form);
   const hasChanges = Object.values(dirtyFields).every((isDirty) => !isDirty);

   const handleChange = (event) => {
      setForm({
         ...form,
         [event.target.id]: event.target.value,
      });
   };

   const handleFormAction = (event) => {
      event.preventDefault();

      if (hasErrors) return;

      onLogin(form);

      setForm({ [INPUTS_ID.EMAIL]: "", [INPUTS_ID.PASSWORD]: "" });
   };

   return (
      <form className="formControlled" onSubmit={handleFormAction}>
         <h2>Controlled form</h2>

         <div>
            <label htmlFor="email">Email</label>
            <input
               id={INPUTS_ID.EMAIL}
               type="text"
               value={form.email}
               onChange={handleChange}
            />
            {errorFields.email?.length > 0 && (
               <span style={{ color: "#ff6b6b" }}>
                  {errorFields.email[0].message}
               </span>
            )}
         </div>

         <div>
            <label htmlFor="pasword">Pasword</label>
            <input
               id={INPUTS_ID.PASSWORD}
               type="password"
               value={form.password}
               onChange={handleChange}
            />
            {errorFields.password?.length > 0 && (
               <span style={{ color: "#ff6b6b" }}>
                  {errorFields.password[0].message}
               </span>
            )}
         </div>

         <button type="submit" disabled={hasChanges || hasErrors}>
            Submit
         </button>
      </form>
   );
}

export default LoginFormControlled;
