import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({header, subHeader, avatar, href, name, children}) {
return (
    <div className='card bg-light'>
         <h4 className='header-lg center-txt'>
            {header}
            </h4>
            <img
                className='avatar'
                src={avatar}
                alt={`Avatar for ${name}`}
            />
            {subHeader && (
            <h4 className='center-text'>
               {subHeader}
            </h4>
            )}
            <h2 className='center-text'>
                <a className='link' href={href}>
                    {name}
                </a>
            </h2>
            {children}
    </div>
    )
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}