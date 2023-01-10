import React from "react"

function Card(properties) {
    return (<div className={properties.className? `${properties.className} card` : "card"}>
        {properties.children}
    </div>)
}

export default Card