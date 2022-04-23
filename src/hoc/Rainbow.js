import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    }
}

export default Rainbow;