import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from '../actions/listAction'

function TodoForm(properties) {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    function changeHandler(event) {
        let txt = event.target.value
        setText(txt)
    }

    function addItemEvent(event) {
        event.preventDefault()
        if (text) {
            dispatch(addItem(text))
            setText("")
            properties.onHideModal()
        }
    }

    return(
    <form>
        <input onChange={changeHandler} type="text" value={text}></input>
        <button onClick={addItemEvent}>Add</button>
    </form>
    )
}

export default TodoForm