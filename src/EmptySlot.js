import React, {useEffect} from "react"
import MoleHill from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let moleTime = Math.floor(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, moleTime)
        return () => clearTimeout(timer)
    })

    return(
        <img src={MoleHill} />
    )
}

export {EmptySlot}