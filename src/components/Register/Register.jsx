import React from 'react';

const Register = () => {
    return (
        <div>
          <h3>This is Register page</h3>
          <form action="">
              <div>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Input your email" />
              </div>
              <div>
                  <label htmlFor="" className="">Password</label>
                  <input type="text" placeholder="Input you password" />
              </div>
              <div>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Your name"/>
              </div>
          </form>
        </div>
    );
};

export default Register;