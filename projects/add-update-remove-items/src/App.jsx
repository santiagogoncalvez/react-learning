import { useStorageState } from './hooks/useStorageState';
// import { stories as storiesInit } from './constants/stories';
import InputWithLabel from './components/InputWithLabel.jsx';
import List from './components/List.jsx';
import AddItem from './components/AddItem.jsx';
import { useEffect, useState } from 'react';

const filterStories = (stories, searchedTerm, removed) => {
  //* Esto funciona correctamente mostrando todos los resultados si la cadena es vacía porque un "string", vacío o no, siempre incluye el caracter vacío ("").
  return stories
    .filter((story) => !removed.includes(story.objectID))
    .filter((story) =>
      story.title.toLowerCase().includes(searchedTerm.toLowerCase()),
    );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
  const [stories, setStories] = useStorageState('items', []);
  const [removed, setRemoved] = useStorageState('removed', []);

  // A
  const handleSearch = (event) => {
    // D
    setSearchTerm(event.target.value);
  };

  const handleAddItem = (title) => {
    setStories((prevStories) => [
      ...prevStories,
      { title, objectID: crypto.randomUUID() },
    ]);
  };

  const handleRemoveItem = (objectID) => {
    setRemoved((prevRemoved) => [...prevRemoved, objectID]);
  };

  const searchedStories = filterStories(stories, searchTerm, removed);

  return (
    <>
      <h1>Custom List</h1>

      {/* // B */}

      <AddItem addItem={handleAddItem} />

      <InputWithLabel
        id="search"
        type="text"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} removeItem={handleRemoveItem} />
    </>
  );
};

export default App;
