import style from './Item.module.css';

const Item = ({ item, removeItem }) => {
  const handleClick = (event) => {
    event.preventDefault();
    removeItem(item);
  };

  //! Hay url que son 'undefined'
  // console.log(item.url);

  return (
    <li className={style['story']}>
      <a href={item.url} target="_blank" className={style['storyLink']}>
        <div className={style['storyLinkData']}>
          <span className={style['storyLinkText']}>{item.title}</span>
          <div className={style['storyLinkInfo']}>
            <div>
              <span className={style['label']}>Author: </span>
              <span>{item.author}</span>
            </div>
            <div>
              <span className={style['label']}>Comments: </span>
              <span>{item.numComments}</span>
            </div>
            <div>
              <span className={style['label']}>Points: </span>
              <span>{item.points}</span>
            </div>
          </div>
        </div>

        <button onClick={handleClick}>Remove</button>
      </a>
    </li>
  );
};

export default Item;
