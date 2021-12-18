import React, { FC } from 'react';
import styled from './style.module.scss';

interface IColor {
  title: string;
  price: string;
  oldPrice: string;
  className?: string;
}

const TitleContent: FC<IColor> = ({ title, price, oldPrice, className }) => (
  <div className={`styled.titleContents ${className}`}>
    <span className={styled.title}>
      {title}
    </span>
    <div className={styled.priceContainer}>
      <span className={styled.price}>{price} </span>
      <span className={styled.oldPrice}>{oldPrice}</span>
    </div>
  </div>
  );

TitleContent.defaultProps = {
  className: '',
};

export default TitleContent;
