import React from 'react'

export default function OutputChat(props) {
    return (
        <>
            <ul className='chatContainer list-unstyled'>
                {props.text.map((message, index) => (
                    <li key={index.toString()} className='message'>
                        {message}
                        <div className='messageConfig'>
                            <span><i className="far fa-laugh-beam"></i></span>
                            <span><i className="fas fa-pencil-alt"></i></span>
                            <span onClick={e => props.openConfigBox()}>...</span>
                            <div className='messageConfigBox list-unstyled'>
                                <div>Pin Message <span><i className="fas fa-thumbtack"></i></span></div>
                                <div>Quote <span><i className="fas fa-quote-right"></i></span></div>
                                <div>Mark Unread <span><i className="fas fa-map-marker"></i></span></div>
                                <div>Copy Message <span><i className="fas fa-link"></i></span></div>
                                <div onClick={() => props.deleteMessage(index)}>Delete Message <span><i className="fas fa-trash-alt"></i></span></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
