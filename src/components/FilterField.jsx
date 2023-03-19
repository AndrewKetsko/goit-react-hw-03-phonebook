import React from "react";

const FilterField = ({searchFunc}) => {
        return <>
            <label htmlFor="search">Find contacts by name</label>
            <input type="text" name="filter" onInput={searchFunc}/>
        </>
};

export { FilterField };