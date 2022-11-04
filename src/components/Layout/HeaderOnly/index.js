import React from 'react';

function HeaderOnly({ children }) {
    return ( 
        <div>
            <h2>Header</h2> 
            <div>
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;