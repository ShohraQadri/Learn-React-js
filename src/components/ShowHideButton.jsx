// Component/ShowHideButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';

const ShowHideButton = () => {
    const [show, setshow] = useState(true)

    const ToggleButton = () => {
        if (show) {
            setshow(false)
            // console.log("show === ", show);
            // console.log("setshow === ", setshow);
        }
        else {
            setshow(true)
        }

        // setshow(prevShow => !prevShow);
    }
    return (
        <div style={{ borderBottom: "2px solid", marginBottom: "10px", paddingBottom: "10px" }} >
            <h2 className='font-bold'>Show & hide</h2>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ flex: "1" }}>
                    <button onClick={ToggleButton} style={{ backgroundColor: "red", color: "white", padding: "10px ", boxShadow: "none" }}>Show / Hide</button>
                </div>
                <div style={{ flex: "2" }}>
                    {
                        show && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae accusantium eveniet blanditiis praesentium delectus reprehenderit, facilis ipsam enim aspernatur quae ad repudiandae quos asperiores magnam numquam officia deleniti quasi!
                            </p>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default ShowHideButton;
