import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function EmojisAPI(props) {

    const [emojis, setEmojis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            axios
                .get('https://emoji-api.com/emojis?access_key=e34266cb0a624c016e8a2a833aad50c6b8648cda')
                .then(res => {
                    setEmojis(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchData();
    }, [])

    if (loading) {
        return <p>Loading emojis...</p>
    }

    const filteredEmojis = emojis.filter( emoji => {
        return emoji.unicodeName.toLowerCase().includes( search.toLowerCase() )
    })


    return (
        <>
            <div className='header'>
                <div className='select d-flex'>
                    <p>GIFs</p>
                    <p className='ml-4'>Emoji</p>
                </div>
                <div>
                    <form>
                        <input className='searchBarEmoji' type="text" placeholder='Find the perfect emoji'
                         onChange={e => setSearch(e.target.value)}/>
                    </form>
                    <span className='searchIcon'><i className="fas fa-search"></i></span>
                </div>
            </div>
            <div className='body'>
                <ul className='emoji-box list-unstyled d-flex flex-wrap'>
                    {filteredEmojis.map((emoji, index) => (
                        <li onClick={() => props.sendEmoji(emoji.character)} key={index}>
                            {emoji.character}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
