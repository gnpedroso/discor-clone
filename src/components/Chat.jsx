import React, { useState } from 'react'
import OutputChat from './subcomponents/OutputChat'
import Form from './subcomponents/Form'

export default function Friends(props) {

    const [value, setValue] = useState('');
    

    const openConfigBox = () => {

        let container = document.querySelectorAll('.messageConfigBox');
        container.forEach(box => {
            box.style.display = 'block';
            let _opened = true

            document.addEventListener('click', function () {
                if (_opened) {
                    box.style.display = 'none';
                    _opened = false;
                }
            });
        })
    }

    const checkProps = () => {
        let d = new Date();
        let hour = d.getHours()
        let min = d.getMinutes()
        let sec = d.getSeconds()

        let ul = document.querySelector('.outputChat .chatContainer')
        if (props.text.length === 0 && ul.children.length === 0) {

            let li = document.createElement('li')
            li.innerHTML = `
                <p>Wandygoo</p>
                <span>Today at ${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}</span>
            `
            li.classList.add('d-flex', 'firstMessage')
            ul.appendChild(li)
        }
    }

    return (

        <div className='chatContainer'>
            <div className='outputChat'>
                <OutputChat 
                    openConfigBox={openConfigBox}
                    text={props.text}
                    deleteMessage={props.deleteMessage}
                />
            </div>

            <div className='inputChat'>
                <div className='addBtn'>
                    <i className="fas fa-plus-circle"></i>
                </div>

                <div>
                    <Form 
                        checkProps={checkProps}
                        saveText={props.saveText}
                        setValue={setValue}
                        value={value}
                    />
                </div>
            </div>
        </div>
    )
}
