import React from "react";

type LoginPropsType = {

}

export const Login:React.FC<LoginPropsType> = () => {
    return (
        <div style={{width:'40%', outline:'1px solid red', margin:'0 auto', display:'flex', flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
            <h2>Login</h2>
            <div>
                <input type="text" placeholder={'enter you name'}/>
            </div>
            <div>
                <input type="text" placeholder={'enter you name'}/>
            </div>
            <div>
                <label >
                    Remember Me
                    <input type="checkbox" name="check"/>
                </label>
            </div>
            <div>
                <a href="#">forgot?</a>
            </div>
            <button>Sign in</button>
           <div>
               <a href="#">Register</a>
           </div>
        </div>
    );
}