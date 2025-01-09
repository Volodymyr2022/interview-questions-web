import React from 'react';

const InputComponent = React.forwardRef(({ placeholder, className }, ref) => (
    <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className={className}
    />
));

export default InputComponent;