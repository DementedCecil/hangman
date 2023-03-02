import HelpText from "./HelpText";
import { useState } from "react";

function Help() {
    let [isActive, setActive] = useState(false);

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