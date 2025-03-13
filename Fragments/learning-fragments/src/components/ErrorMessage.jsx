const ErrorMessage = ({items}) => {
  let groceryItems = ["Spoons", "Knives", "Pressure Cookers" , "Trays", "Grinders", "Bucket" ];

  return (
     items.length === 0 ? <p>Need grocery items</p> : null
  )
};

export default ErrorMessage;