import Item from './Item.jsx';
import styled from 'styled-components';

const NoNewsResults = () => {
  return <p>No news was found for this search.</p>;
};

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const List = ({ list, removeItem }) => {
  const hasNews = list?.length > 0;
  return hasNews ? (
    <Ul className="news">
      {list.map((item) => (
        <Item key={item.objectId} item={item} removeItem={removeItem} />
      ))}
    </Ul>
  ) : (
    <NoNewsResults />
  );
};

export default List;
