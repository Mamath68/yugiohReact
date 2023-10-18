import React from 'react'
import './navListItem.css';

function NavListItem({ item, navOnClick }) {
    return (
        <li>
            <a
                href="#"
                className={`nav-link ${item.active ? "active" : null}`}
                onClick={() => navOnClick(item._id, item.target)}
            >
                {item.name}</a>
        </li>
    );
}

export default NavListItem