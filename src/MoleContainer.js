import React, {useState} from "react";
import { Mole } from "./Mole";
import { EmptySlot } from "./EmptySlot";


const MoleContainer = (props) => {
    let [mole, displayMole] = useState(false)

    const handleBop = (e) => {
        props.setScore(props.score + 1)
        displayMole(false)
    }

    let moleDisplay = mole ? <Mole setScore = {props.setScore} toggle={displayMole} handleBop={handleBop} /> : <EmptySlot toggle={displayMole} />

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-3 p-2 m-2 border border-warning rounded">
            {moleDisplay}
        </div>
    )
}

export {MoleContainer}