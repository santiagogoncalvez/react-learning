import { useRef } from 'react';
import styled from 'styled-components';

const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSlider = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 15px;
  width: 100%;
`;

const StyledThumb = styled.div`
  width: 10px;
  height: 25px;
  border-radius: 3px;
  position: relative;
  top: -5px;
  opacity: 0.8;
  background: #151415ff;
  cursor: pointer;
`;

const getPercentage = (current, max) => (100 * current) / max;

const getValue = (percentage, max) => (max / 100) * percentage;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const Slider = ({
  initial,
  max,
  formatFn = (number) => number.toFixed(0),
  onChange,
}) => {
  const initialPercentage = getPercentage(initial, max);

  const sliderRef = useRef();
  const thumbRef = useRef();
  const currentRef = useRef();
  const diff = useRef();
  const lastValueRef = useRef(null);

  const handleMouseMove = (event) => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

    const start = 0;

    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);

    // solo actualiza el DOM si el valor cambió
    if (lastValueRef.current === newValue) return;

    thumbRef.current.style.left = getLeft(newPercentage);
    currentRef.current.textContent = formatFn(newValue);

    onChange(newValue);

    lastValueRef.current = newValue;
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (event) => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <SliderHeader>
        <strong ref={currentRef}>{formatFn(initial)}</strong>
        &nbsp;/&nbsp;
        {formatFn(max)}
      </SliderHeader>
      <StyledSlider ref={sliderRef}>
        <StyledThumb
          style={{ left: getLeft(initialPercentage) }}
          ref={thumbRef}
          onMouseDown={handleMouseDown}
        />
      </StyledSlider>
    </>
  );
};

export default Slider;
