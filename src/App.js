import React, { useState } from 'react'
import GroupBar from './components/GroupBar'
import MenuPhone from './components/MenuPhone'
import Header from './components/Header'
import Chat from './components/Chat'
import Friends from './components/Friends'



import './components/layout.css'

export default function App() {
  const [text, setText] = useState([]);
  const [textChannel, setTextChannel] = useState([])
  const [voiceChannel, setvoiceChannel] = useState([])

  return (
    <React.Fragment>
      <div className='row no-gutters'>
        <nav className='col-1 GroupBar'>
          <GroupBar />
        </nav>
        <div className='col-2 MenuPhone'>
          <MenuPhone
            textChannel={textChannel}
            voiceChannel={voiceChannel}
            saveChannel={(inputChannel, textCheckBox, voiceCheckBox) => {
              if (inputChannel.length > 0 && textCheckBox.checked) {
                setTextChannel([...textChannel, inputChannel])
              } else if (inputChannel.length > 0 && voiceCheckBox.checked) {
                setvoiceChannel([...voiceChannel, inputChannel])
              }
            }}
          />
        </div>
        <div className='col-9'>
          <div className='row no-gutters'>
            <div className='col-12 Header'>
              <Header />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-9 Chat'>
              <Chat
                text={text}
                saveText={(value) => {
                  if (value.length > 0) {
                    setText([...text, value])
                  }
                }
                }
                deleteMessage={msgIndex => {
                  const newText = text.filter((_, index) => index !== msgIndex)
                  setText(newText)
                }
                }
              />
            </div>
            <div className='col-3 Friends'>
              <Friends />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
