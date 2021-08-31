import React from "react";
import shortid from "shortid";
import s from './Filter.module.css';

const id = shortid.generate();

const Filter = ({value, SearchContact }) => {
  return (
    <label htmlFor={id}>
          <p className={s.title}>Find contact by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={SearchContact}
        id={id}
       
      ></input>
    </label>
  );
};

export default Filter;