import React, { FC } from 'react';
import styled from './style.module.scss';

const Button: FC<IButton> = ({
    submit,
    children,
    className,
    onClick,
}) => (
  <button type={submit ? 'submit' : 'button'} onClick={onClick} className={`${styled.button} ${className}`}>{children}</button>
);

interface IButton {
    submit?: boolean,
    children: React.ReactNode
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

Button.defaultProps = {
    submit: false,
    onClick: () => '',
    className: '',
};

export default Button;
