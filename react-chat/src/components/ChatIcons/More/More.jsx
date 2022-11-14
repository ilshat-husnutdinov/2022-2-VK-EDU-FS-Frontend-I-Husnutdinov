import React, { useState } from "react";
import './More.css';

export function More() {
    const [IsOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        IsOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const changeDisplay = () => {
        return IsOpen ? 'block' : 'none'
    }

    React.useEffect(() => {
        window.addEventListener('click', function(e) {
            e.preventDefault();

            if (!e.target.matches('#more_vert')) {
                setIsOpen(false);
            }
        })
    },
    []);


    return (
        <div className="more">
            <button  className="dropbtn" onClick={handleClick}>
                <span className="material-icons" id="more_vert">
                    more_vert
                </span>
            </button>
            <div id="myDropdown" className="dropdown-content" style={{display:changeDisplay()}}>
              <a href="/#">Info</a>
              <a href="/#">Mute</a>
            </div>
        </div>
    )
}