import React from 'react';

const ButtonComponent = ({ onClick, className, children }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

export default ButtonComponent;