import HelpText from "./HelpText";
import { useState } from "react";

function Help() {
    // useState used for whether the Modal is toggled from active to inactive
    let [isActive, setActive] = useState(false);

    // Toggles state
    function handleClick() {
        setActive(!isActive);
    }

    return (
        <div className="help" onClick={handleClick}>
            <span>?</span>
            <HelpText className={isActive? 'help-modal-active' : ''} onClick={handleClick} />
        </div>
    );
}

export default Help;