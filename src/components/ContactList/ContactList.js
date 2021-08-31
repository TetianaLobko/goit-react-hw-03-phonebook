import React from 'react';

import s from './ContactList.module.css';

const Contactlist = ({contactList, onDelete}) => {
    return (
     <ul className={s.list}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              className={s.btnDelete}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
)
}

export default Contactlist;