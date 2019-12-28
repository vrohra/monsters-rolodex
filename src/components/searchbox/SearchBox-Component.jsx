import React from 'react';

import './SearchBox.css';
import {placeholder} from "@babel/types";

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);