import './Wrapper.css';

import React from 'react';

export function Wrapper({children}: {children: React.ReactNode}): JSX.Element {
  
  return (
    <div className="Wrapper">
      {children}
    </div>
  );
}