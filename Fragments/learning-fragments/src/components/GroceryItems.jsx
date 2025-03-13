import Item from "./Item";

const GroceryItems = ({items}) => {
 
  return (
    <ul className="list-group">
      {items.map((item, index) => (
       <Item key ={index}  groceryItem={item}></Item>
      ))}
    </ul>
  );
};

export default GroceryItems;
