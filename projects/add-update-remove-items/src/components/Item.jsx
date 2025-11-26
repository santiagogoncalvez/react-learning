const Item = ({ item, removeItem }) => {
  return (
    <li>
      <div>
        <a href={item.url}>{item.title}</a>
      </div>
      <button onClick={() => removeItem(item.objectID)}>Remove</button>
    </li>
  );
};

export default Item;
