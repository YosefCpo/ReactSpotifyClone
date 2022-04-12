import React, {useContext, createContext, useReducer} from "react";

export let DataLayerContext = createContext();

export let DataLayer = ({initialState, reducer, children}) => {
	return (
		<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</DataLayerContext.Provider>
	);
};

export let useDataLayerValue = () => useContext(DataLayerContext);
