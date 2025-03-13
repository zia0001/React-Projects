import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let groceryItems = ["Spoons", "Knives", "Pressure Cookers" , "Trays", "Grinders", "Bucket" ];

  //let groceryItems = [];
  let emptyMessage =  groceryItems.length === 0 ? <p>Need grocery items</p> : null;
  return (
    <>
      <h2>Grocery Items</h2>
      {emptyMessage}
      <ul className="list-group">
        {groceryItems.map((item, index) => (
         <li key={index} className="list-group-item">{item}</li>
       ))}
      </ul>
    </>
  );
}

export default App;
