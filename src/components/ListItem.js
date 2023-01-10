import React from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { deleteItem, changeChecked } from '../actions/listAction'

function CheckedImg(properties) {
    if (properties.checked) {
        return(<img alt="check" src="./assets/checked.png"></img>)
    } else {
        return(<img alt="uncheck" src="./assets/unchecked.png"></img>)
    }
}

function ListItem(properties) {
    const dispatch = useDispatch()
    return(
        <li>
            <Card className={properties.item.checked ? "checked item" : "item"}>
            {properties.item.text}
        <div>
            <button onClick={() => {dispatch(changeChecked(properties.item.id))}}><CheckedImg checked={properties.item.checked}></CheckedImg></button>
            <button onClick={() => {dispatch(deleteItem(properties.item.id))}}><img alt="A bin icon" src="./assets/bin.png"></img></button>
        </div>
        </Card>
        </li>
    )
}

export default ListItem