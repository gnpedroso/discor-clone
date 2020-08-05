import React from 'react'
import EmojisAPI from './EmojisAPI'

export default function Form(props) {

    function togEmojis() {
        let emojiBox = document.querySelector('.emojisAPI');
        if (emojiBox.style.width === '350px') {
            emojiBox.style.width = '0';
            emojiBox.style.opacity = 0;
        } else {
            emojiBox.style.width = '350px';
            emojiBox.style.opacity = 1;
        }
    }


    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.checkProps()
                    props.saveText(props.value)
                    props.setValue('');
                }}>
                <input
                    type='text'
                    placeholder='Message...'
                    onChange={e => props.setValue(e.target.value)}
                    value={props.value}
                />
            </form>

            <div className='chatConfigs'>
                <span><i className="fas fa-gift"></i></span>
                <span className='gif'>GIF</span>
                <span className='emojis' onClick={() => togEmojis()}><i className="far fa-grin-alt"></i></span>
            </div>

            <div className='emojisAPI'>
                <EmojisAPI
                    sendEmoji={(emoji) => (
                        props.setValue(emoji)
                    )} />
            </div>
        </>
    )
}
