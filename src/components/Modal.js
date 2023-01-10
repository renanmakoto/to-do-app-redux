import React from 'react'
import Card from './Card'

function Modal(properties) {

    function hideModal(event) {
    let target = event.target
    if (target.id === "modal") {
        properties.onHideModal()
    }
    console.log(target)
}

    return(<div id="modal" onClick={hideModal} className={properties.show? "Modal": "Modal hide"}>
        <Card className="cardModal">
            {properties.children}
        </Card>
    </div>)
}

export default Modal