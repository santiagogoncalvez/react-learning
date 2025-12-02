import styled from 'styled-components';
import InputWithLabel from './InputWithLabel';

const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: ${(props) => props.$gap + 'px'};

  .searchQuery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 56.47px;
  }

  .searchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.75rem 1rem;
  }
`;

const SearchForm = ({ search, handleSearchInput, action }) => {
  return (
    <Form className="searchForm" action={action} $gap={8}>
      <InputWithLabel
        id="searchQuery"
        type="text"
        value={search}
        placeholder={'React, Angular, Vue...'}
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button className="searchButton" type="submit" disabled={!search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          width="30px"
          height="30px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </Form>
  );
};

export default SearchForm;
