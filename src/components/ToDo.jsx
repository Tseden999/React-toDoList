import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function ToDo(props) {
    return (
        <li className="list-items">
            {props.item}
            <span className='icons'>
                <i className="bi bi-trash3-fill icon-delete"
                    onClick={e => {
                        props.deleteList(props.index)
                    }}></i></span>
        </li>
    )
}

export default ToDo
