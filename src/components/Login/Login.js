import React from 'react';
import Auth from './UseAuth';

const Login = () => {
    const auth = Auth();
  
    return (
        <div>
            <h1>Join Here</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> : 
                <button onClick={auth.signInWithGoogle}>Sign In With Google</button>
            

            }
            
        </div>
    );
};

export default Login;