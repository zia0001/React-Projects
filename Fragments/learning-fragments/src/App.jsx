import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GroceryItems from "./components/GroceryItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let groceryItems = ["Spoons", "Knives", "Pressure Cookers" , "Trays", "Grinders", "Bucket" ];
  //let groceryItems = [];
  
  return (
    <>
      <h2>Grocery Items</h2>
      <ErrorMessage items={groceryItems}></ErrorMessage>
      <GroceryItems items={groceryItems}></GroceryItems>
    </>
  );
}

export default App;
