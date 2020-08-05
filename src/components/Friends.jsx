import React from 'react'

export default function Friends(props) {
    return (
        <div className='Friends'>
            <p className='userOnline'>Online - <span>1</span></p>
            <div className='d-flex align-items-center'>
                <div className="avatarWrapper mr-2">
                    <i className="fas fa-user-circle"></i>
                    <span className='grayCircle'>
                        <span className='online'></span>
                    </span>
                </div>
                <div className='userName'>
                    <p className='mt-3'>Wandygoo <span><i className="fas fa-crown"></i></span></p>
                </div>
            </div>
        </div>
    )
}
