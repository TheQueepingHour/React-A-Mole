import React, {useState} from "react";
import { Mole } from "./Mole";
import { EmptySlot } from "./EmptySlot";


const MoleContainer = (props) => {
    let [mole, displayMole] = useState(false)

    const handleBop = (e) => {
        props.setScore(props.score + 1)
        displayMole(false)
    }

    let moleDisplay = mole ? <Mole  /> : <EmptySlot />

    return(
        <div>
            {moleDisplay}
        </div>
    )
}

export {MoleContainer}