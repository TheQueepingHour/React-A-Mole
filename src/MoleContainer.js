import { Mole } from "./Mole";
import { EmptySlot } from "./EmptySlot";

const MoleContainer = (props) => {
    return(
        <div>
            <h1>Mole Container</h1>
            <Mole />
            <EmptySlot />
        </div>
    )
}

export {MoleContainer}