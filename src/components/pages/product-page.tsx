import React, { FC } from 'react';
import styled from './style.module.scss';
import Component from '../organisms/cardProduct/component';

const ProductPage: FC = () => (
  <div className={styled.productPage}>
    <div className={styled.component}>
      <Component />
    </div>
  </div>
);

export default ProductPage;
