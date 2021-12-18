import React, { FC } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from './style.module.scss';
import { IconButton } from '@material-ui/core';

const ContentArrows: FC<IArrows> = ({ children, className }) => (
  <div className={`${styled.arrows} ${className}`}>
    <IconButton className={styled.arrowPrev}>
      <ChevronLeftIcon className={styled.icon} />
    </IconButton>
    {children}
    <IconButton className={styled.arrowNext}>
      <ChevronRightIcon className={styled.icon} />
    </IconButton>
  </div>
);

interface IArrows {
    children: React.ReactNode
    className?: string
}

ContentArrows.defaultProps = {
    className: '',
};

export default ContentArrows;
