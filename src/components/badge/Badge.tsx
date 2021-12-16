import React, { FC } from 'react'

import './styles.css';

type Props = {
  className?: string;
}

const Badge: FC<Props> = ({ children, className }) => {
  return (
    <div className={`badge ${className || ''}`}>
      {children}
    </div>
  );
};

export default Badge;
