import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from './Hero';
import Demat from './Demat';

import OpenAccount from '../OpenAccount'


function SignupPage() {
    return (  
        <>

       
        <Hero/>
        
        <Demat/>
        <OpenAccount/>
        

        </>
    );
}

export default SignupPage;
