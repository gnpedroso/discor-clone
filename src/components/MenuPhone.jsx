import React, { useState } from 'react'

export default function MenuPhone(props) {

    const [inputChannel, setinputChannel] = useState('');

    const setTextBox = () => {
        let textCheckBox = document.querySelector('.textCheckBox')
        let voiceCheckBox = document.querySelector('.voiceCheckBox')

        if (textCheckBox.checked) {
            voiceCheckBox.checked = false
        }
    }
    const setVoiceBox = () => {
        let textCheckBox = document.querySelector('.textCheckBox')
        let voiceCheckBox = document.querySelector('.voiceCheckBox')

        if (voiceCheckBox.checked) {
            textCheckBox.checked = false
        }
    }

    return (
        <div>
            <div className='title'>
                <h5>Group Name</h5>
                <p><i className="fas fa-chevron-down"></i></p>
            </div>

            <div className='typeChannel'>
                <ul className='list-unstyled'>
                    <li className='channelTitle'><span><i className="fas fa-chevron-down mr-1"></i></span>Text Channels</li>
                    <li className='channelPlus' data-toggle="modal" data-target="#createChannelModal" >+</li>

                    <div className="modal fade" id="createChannelModal" tabIndex="-1" role="dialog" aria-labelledby="createChannelModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Create text Channel</h5>
                                </div>
                                <div className="modal-body">
                                    <div className='selectBox'>
                                        <input type='checkbox' className='checkbox textCheckBox' onClick={setTextBox} />
                                        <span><i className="fas fa-hashtag" /></span>
                                        <span className='createChannel'>Text Channel</span>
                                    </div>
                                    <div className='selectBox'>
                                        <input type='checkbox' className='checkbox voiceCheckBox' onClick={setVoiceBox} />
                                        <span><i className="fas fa-volume-up" /></span>
                                        <span className='createChannel'>Voice Channel</span>
                                    </div>
                                    <div><small>Channel Name</small></div>
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            let textCheckBox = document.querySelector('.textCheckBox')
                                            let voiceCheckBox = document.querySelector('.voiceCheckBox')
                                            props.saveChannel(inputChannel, textCheckBox, voiceCheckBox)
                                            setinputChannel('')
                                        }}
                                    >
                                        <input
                                            type="text"
                                            onChange={e => setinputChannel(e.target.value)}
                                            value={inputChannel}
                                        />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <span data-dismiss="modal">Close</span>
                                    <button
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                            let textCheckBox = document.querySelector('.textCheckBox')
                                            let voiceCheckBox = document.querySelector('.voiceCheckBox')
                                            props.saveChannel(inputChannel, textCheckBox, voiceCheckBox)
                                            setinputChannel('')
                                        }}
                                        data-dismiss="modal"
                                        className="btn btn-primary">Create Channel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
            <div className='channels'>
                <ul className='channelList list-unstyled'>
                    <li className='channel active'>
                        <span><i className="fas fa-hashtag"></i></span>
                        <span className='channelTitle'> general</span>
                        <span className='toRight addUser'><i className="fas fa-user-plus"></i></span>
                        <span className='toRight configChannel'><i className="fas fa-wrench"></i></span>
                    </li>
                    {props.textChannel.map((channel, index) => (
                        <li key={index} className='channel'>
                            <span><i className="fas fa-hashtag"></i></span>
                            <span className='channelTitle'> {channel}</span>
                            <span className='addUser'><i className="fas fa-user-plus"></i></span>
                            <span className='configChannel'><i className="fas fa-wrench"></i></span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='typeChannel'>
                <ul className='list-unstyled'>
                    <li className='channelTitle'><span><i className="fas fa-chevron-down mr-1"></i></span>Voice Channels</li>
                    <li className='channelPlus' data-toggle="modal" data-target="#createChannelModal">+</li>
                </ul>
            </div>
            <div className='channels'>
                <ul className='list-unstyled'>
                    <li className='channel voiceActive'>
                        <span><i className="fas fa-volume-up"></i></span>
                        <span className='channelTitle'> General</span>
                        <span className='addUser'><i className="fas fa-user-plus"></i></span>
                        <span className='configChannel'><i className="fas fa-wrench"></i></span>
                    </li>
                    {props.voiceChannel.map((channel, index) => (
                        <li key={index} className='channel'>
                            <span><i className="fas fa-volume-up"></i></span>
                            <span className='channelTitle'> {channel}</span>
                            <span className='addUser'><i className="fas fa-user-plus"></i></span>
                            <span className='configChannel'><i className="fas fa-wrench"></i></span>
                        </li>
                    ))}

                </ul>
            </div>


            <div className='underMenu'>
                <div className="avatarWrapper mr-2">
                    <i className="fas fa-user-circle"></i>
                    <span className='grayCircle'>
                        <span className='online'></span>
                    </span>

                </div>
                <div className="nameTag ">
                    <ul className='list-unstyled'>
                        <li>Wandygoo</li>
                        <li className='discCode'>#3833</li>
                    </ul>
                </div>
                <div className="configs">
                    <span><i className="fas fa-microphone"></i></span>
                    <span><i className="fas fa-headphones"></i></span>
                    <span><i className="fas fa-wrench"></i></span>
                </div>
            </div>


        </div>
    )
}
