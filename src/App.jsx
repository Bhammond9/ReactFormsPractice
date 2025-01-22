// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import BetterSignupForm from './BetterSignupForm'
import SignupForm from './SignupForm'
import UsernameForm from './UserNameForm'
import ShoppingList from "./ShoppingList";
import ShoppingListForm from './ShoppingListForm';
import ValidatedShoppingListForm from './ValidatedShoppingListForm';
import FormDemo from './FormDemo';
import './App.css'

function App() {
  return (
    <>
      <ShoppingList />
      <h1>Validated Form</h1>
      <FormDemo />
    </>
  );
}

export default App;



