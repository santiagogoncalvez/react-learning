import Button from './components/Button.jsx';
import RadioGroup from './components/RadioGroup.jsx';
import CheckboxGroup from './components/CheckboxGroup.jsx';
import DropdownWithSelect from './components/DropdownWithSelect.jsx';
import Dropdown from './components/Dropdown.jsx';
import DnDList from './components/DnDList.jsx';
import DnDListWithLib from './components/DnDListWhitLib.jsx';
import Slider from './components/Slider.jsx';

import { stories } from './constants/stories.js';
import { INITIAL_LIST } from './constants/list.js';

function App() {
  return (
    <div className="app">
      <Button
        type="button"
        disabled={false}
        name="boton 1"
        value="1"
        onClick={() => console.log('Button clicked')}
      >
        Button
      </Button>

      <hr />

      <RadioGroup options={stories} />

      <hr />

      <CheckboxGroup options={stories} />

      <hr />

      <DropdownWithSelect
        options={stories}
        label="Elegir una opción"
        name="stories"
      />

      <hr />

      <Dropdown
        options={stories}
        label="Elegir una opción"
        selectedOption={(option) => console.log(option)}
      />

      <hr />

      <DnDList options={stories} />

      <hr />

      <DnDListWithLib
        listInit={INITIAL_LIST}
        dragItemStyle={{
          background: '#edededff',
          borderRadius: '16px',
        }}
        dragListStyle={{
          // background: 'lightblue',
          border: '1px solid #cfcfcfff',
          borderRadius: '16px',
        }}
      />

      <hr />

      <DnDListWithLib
        listInit={INITIAL_LIST}
        isVertical={false}
        dragItemStyle={{
          background: '#edededff',
          borderRadius: '16px',
        }}
        dragListStyle={{
          // background: 'lightblue',
          border: '1px solid #cfcfcfff',
          borderRadius: '16px',
        }}
      />

      <hr />

      <Slider
        initial={20}
        max={25}
        formatFn={(number) => number.toFixed(2)}
        onChange={(value) => console.log(value.toFixed(2))}
      />
    </div>
  );
}

export default App;
