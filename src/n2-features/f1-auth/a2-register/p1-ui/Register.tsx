import React, {useState} from "react";

export const Register = () => {
    const [value,setValue]=useState('');
    return <div>
        register
        <div>
            <input value={value}/>
        </div>
        <div>
            <input/>
        </div>
        <div>
            <input/>
        </div>
        <button>Sign up</button>
        <div>

        </div>
    </div>
}