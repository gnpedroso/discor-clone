import React from 'react'

export default function Header(props) {
    return (
        <div className='Header'>
            <div className='channelHeader d-flex'>
                <div className='hashMark'><i className="fas fa-hashtag"></i></div>
                <div className='channelName'>
                    <p>general</p>
                </div>
            </div>

            <div className='headerConfigs d-flex align-items-center'>
                <div><i className="fas fa-bell"></i></div>
                <div><i className="fas fa-thumbtack"></i></div>
                <div><i className="fas fa-user-friends"></i></div>
                <div className='searchInput'>
                    <input type="text" placeholder='Search' />
                    <span><i className="fas fa-search"></i></span>
                </div>
                <div><i className="fas fa-inbox"></i></div>
                <div><i className="fas fa-question-circle"></i></div>

            </div>
        </div>
    )
}
