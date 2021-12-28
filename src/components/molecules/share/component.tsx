import React, { FC, useState } from 'react';
import styled from './style.module.scss';
import EventButtons from '../eventButtons/component';
import Color from '../colors/component';

interface IProps {
    className: string
}

const Share: FC<IProps> = ({ className }) => {
    const [open, setOpen] = useState(false);

  return (
    <div className={`${styled.share} ${className}`}>
      <Color
        label="color"
        className="mr-2-vw"
        color="#fff"
        onClick={() => setOpen(open)}
      />
      <Color
        label="color"
        className="mr-2-vw"
        color="#fff"
        onClick={() => setOpen(open)}
      />
      <EventButtons className={styled.colorButton} onClick={() => setOpen(!open)} label="sss">XS</EventButtons>
    </div>
);
};

export default Share;
