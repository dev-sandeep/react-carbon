import React, { useState } from 'react';

const BaseContext = React.createContext([{}, () => { }]);

const BaseContextProvider = (props) => {
    const [state, setState] = useState({
        news: [],
        emission: {
            energy: 0,
            food: 0,
            travel: 0,
            house: 0
        }
    });

    return (
        <BaseContext.Provider value={[state, setState]}>
            {props.children}
        </BaseContext.Provider>
    );
};

export {  BaseContext, BaseContextProvider };