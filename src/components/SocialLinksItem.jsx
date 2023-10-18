import React from 'react';
import './socialLinksItem.css';

function SocialLinksItem({ name, href }) {
    return (

        <a href={href} target='_blank' rel='noreferrer noopener'>
            <i className={name}></i>
        </a>
    );
}

export default SocialLinksItem