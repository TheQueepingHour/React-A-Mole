import { useEffect } from "react"
import moleImg from './mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randSecs = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSecs)
        return () => clearTimeout(timer)
    })

    return(
        <div className="container-sm">
            <img src={moleImg} onClick={props.handleBop} className="img-fluid" style={{'width': '10vw'}} alt="Mole" />
        </div>
    )
}

export {Mole}