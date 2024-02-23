import React, {useEffect} from "react"
import MoleHill from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let moleTime = Math.floor(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, moleTime)
        return () => clearTimeout(timer)
    })

    return(
        <div className="container-sm">
            <img src={MoleHill} className="img-fluid" style={{'width': '10vw'}} alt="Mole Hill"/>
        </div>
    )
}

export {EmptySlot}