import React, { FC } from 'react';
import styled from './style.module.scss';
import Button from '../../atoms/buttons/component';
import Tooltip from '../../atoms/tooltip/component';

interface IProps {
    label: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const EventButtons: FC<IProps> = ({ label, onClick, children }) => (
  <Tooltip tipCustom={styled.label} label={label}>
    <Button className={styled.eventButtons} onClick={onClick}>{children}</Button>
  </Tooltip>
);

export default EventButtons;
