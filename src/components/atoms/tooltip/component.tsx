import React, { FC } from 'react';

import styled from './style.module.scss';

interface ITooltip {
  label: string;
  children: React.ReactNode;
  className?: string;
  tipCustom?: string
}

const Tooltip: FC<ITooltip> = ({ label, tipCustom, children, className }) => (
  <div className={`${styled.wrapper} ${className}`}>
    <div className={`${styled.tip} ${tipCustom}`}>{label}</div>
    {children}
  </div>
);

Tooltip.defaultProps = {
  className: '',
  tipCustom: '',
};

export default Tooltip;
