import React from 'react'

export default function GroupBar(props) {
    return (
        <div className='insideGroupBar'>
            <ul className='list-unstyled'>
                <li><i className="fab fa-discord"></i></li>
                <li className='icon'>D</li>
                <li className='icon'>E</li>
                <li className='icon'>V</li>
                <li className='icon icon-menu'>+</li>
                <li className='icon icon-menu'><i className="far fa-compass"></i></li>
                <span className='line'></span>
                <li className='icon icon-menu'><i className="fas fa-download"></i></li>
            </ul>
        </div>
    )
}
