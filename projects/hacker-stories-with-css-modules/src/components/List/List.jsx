import Item from '../Item/Item.jsx';
import style from './List.module.css';

const NoNewsResults = () => {
  return <p>No news was found for this search.</p>;
};

const List = ({ list, removeItem }) => {
  const hasNews = list?.length > 0;
  return hasNews ? (
    <ul className={style['news']}>
      {list.map((item) => (
        <Item key={item.objectId} item={item} removeItem={removeItem} />
      ))}
    </ul>
  ) : (
    <NoNewsResults />
  );
};

export default List;
