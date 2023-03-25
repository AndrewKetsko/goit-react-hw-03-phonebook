import React from 'react';
import { Input, Name } from './FilterField.styled';

const FilterField = ({ searchFunc }) => {
  return (
    <>
      <Name htmlFor="search">Find contacts by name</Name>
      <Input type="text" name="filter" onInput={searchFunc} />
    </>
  );
};

export { FilterField };
