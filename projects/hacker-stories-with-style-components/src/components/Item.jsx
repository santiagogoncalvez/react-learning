import styled from 'styled-components';

const Li = styled.li`
  @media (max-width: 600px) {
    .story {
      padding: 16px 20px;
    }

    .storyLink {
      flex-direction: column; /* de horizontal → vertical */
      align-items: flex-start; /* izquierda */
      gap: 16px; /* mayor espacio táctil */
    }

    .storyLinkText {
      font-size: 1.15rem;
    }

    .storyLinkInfo {
      width: 100%;
      display: flex;
      flex-wrap: wrap; /* si no entra, baja */
      gap: 10px;
      font-size: 0.95rem;
    }

    .label {
      font-size: 0.9rem;
    }
  }
`;

const Link = styled.a`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  border: 1px solid var(--light-gray);
  border-radius: 8px;
  background: var(--white);

  &:hover {
    text-decoration: none;
  }

  &:hover:not(:has(.removeButton:hover)) .storyLinkText {
    text-decoration: underline;
  }

  span {
    color: var(--black);
  }

  .storyLinkText {
    color: var(--primary) !important;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .storyLinkData {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .storyLinkInfo {
    display: flex;
    gap: 16px;
  }
`;

const InfoLabel = styled.span`
  color: var(--gray) !important;
`;

const Button = styled.button`
  background-color: var(--white);
  color: var(--primary);
  color: var(--light-primary);
`;

const RemoveButton = styled(Button)`
  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }

  &:focus {
    border: 2px solid black;
  }

  &:active {
    border: 0px solid;
  }
`;

const Item = ({ item, removeItem }) => {
  const handleClick = (event) => {
    event.preventDefault();
    removeItem(item);
  };

  return (
    <Li className="story">
      <Link href={item.url} target="_blank" className="storyLink">
        <div className="storyLinkData">
          <span className="storyLinkText">{item.title}</span>
          <div className="storyLinkInfo">
            <div>
              <InfoLabel className="label">Author: </InfoLabel>
              <span>{item.author}</span>
            </div>
            <div>
              <InfoLabel className="label">Comments: </InfoLabel>
              <span>{item.numComments}</span>
            </div>
            <div>
              <InfoLabel className="label">Points: </InfoLabel>
              <span>{item.points}</span>
            </div>
          </div>
        </div>

        <RemoveButton className="removeButton" onClick={handleClick}>
          Remove
          
        </RemoveButton>
      </Link>
    </Li>
  );
};

export default Item;
