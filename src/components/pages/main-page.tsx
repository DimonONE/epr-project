import React, { FC, useMemo } from 'react';
import Button from '../atoms/buttons/component';
import Size from '../atoms/sizes/component';
import Color from '../molecules/colors/component';
import { Link } from 'react-router-dom';

const MainPage: FC = () => {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<number | null>(null);

  const sizes = useMemo(() => [{ id: 1, size: 'XL' }, { id: 2, size: 'XXL' }, { id: 3, size: 'XXXL' }, { id: 4, size: 'MEGAXL', disabled: true }], []);
  const colors = useMemo(() => [{ id: 1, label: 'Green', color: 'rgba(57, 182, 59, 1)' }, { id: 2, label: 'Red', color: 'rgba(237, 42, 84, 1)' }, { id: 3, label: 'Yellow', color: 'rgba(255, 255, 0, 1)' }], []);
  const getSelectSizeHanlder = (id: number) => () => {
    setSelectedSize(id);
  };

  const getSelectColorHanlder = (id: number) => () => {
    setSelectedColor(id);
  };

  return (
    <>
      <h1 className="ml-5-vw">Hello world !</h1>
      <Button className="ml-5-vw mb-5">Button</Button>
      {
        sizes.map(({ id, size, disabled }) => (
          <Size
            className="ml-5-vw"
            key={id}
            disabled={disabled}
            onClick={getSelectSizeHanlder(id)}
            selected={id === selectedSize}
          >
            {size}
          </Size>
        ))
      }
      {
        colors.map(({ id, ...props }) => (
          <Color
            className="ml-5-vw mb-5"
            key={id}
            onClick={getSelectColorHanlder(id)}
            selected={id === selectedColor}
            {...props}
          />
        ))
      }
      <Link to="/product" className="ml-5-vw mb-5">Product</Link>
    </>
  );
};

export default MainPage;
