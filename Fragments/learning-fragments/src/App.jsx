import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let groceryItems = ["Spoons", "Knives", "Pressure Cookers" , "Trays", "Grinders", "Bucket"];
  return (
    <>
      <h2>Grocery Items</h2>
      <ul className="list-group">
        {groceryItems.map((item, index) => (
         <li key={index} className="list-group-item">{item}</li>
       ))}
      </ul>
    </>
  );
}

export default App;
