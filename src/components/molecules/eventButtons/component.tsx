import React, { FC } from 'react';
import styled from './style.module.scss';
import Button from '../../atoms/buttons/component';
import Tooltip from '../../atoms/tooltip/component';

interface IProps {
    label: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

const EventButtons: FC<IProps> = ({ label, className, onClick, children }) => (
  <Tooltip tipCustom={styled.label} label={label}>
    <Button className={`${styled.eventButtons} ${className}`} onClick={onClick}>{children}</Button>
  </Tooltip>
);

EventButtons.defaultProps = {
    className: '',
};

export default EventButtons;
