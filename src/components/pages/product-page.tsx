import React, { FC } from 'react';
import styled from './style.module.scss';
import Component from '../organisms/cardProduct/component';

const ProductPage: FC = () => (
  <div className={styled.productPage}>
    <Component />
  </div>
);

export default ProductPage;
