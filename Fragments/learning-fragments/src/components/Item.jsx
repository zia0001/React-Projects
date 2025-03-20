import styles from "./Item.module.css";

const Item =({groceryItem}) => {
  return (
    <li className={`${styles["kg-item"]}`}>
    <span className={styles["kg-span"]}>{groceryItem}</span>
  </li>
  );
};

export default Item;