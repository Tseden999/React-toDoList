import React, { useState } from 'react'

function ToDoList(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if (e.keyCode == 13) {
            props.addList(inputText)
            setInputText("")
        }

    }
    return (
        <div className='input-container'>
            <input type='text' className='input-box' placeholder='Enter ur todo'
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnterPress}
            />
            <button className='add-btn'
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                }}>plus</button>

        </div>
    )

}

export default ToDoList
