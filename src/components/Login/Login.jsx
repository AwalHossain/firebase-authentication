import React from 'react';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {signInWithgoogle} = useAuth();
    return (
        <div>
            <h3>This is login page</h3>
            <form action="">
            <div>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Input your email" />
              </div>
              <div>
                  <label htmlFor="" className="">Password</label>
                  <input type="text" placeholder="Input you password" />
              </div>
            </form>
            <div>
                
            </div>
            <div>

                <button onClick={signInWithgoogle}>Google Sign in</button>
                
            </div>
        </div>
    );
};

export default Login;