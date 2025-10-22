import React from 'react';
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
 
function SupportPage() {
    return ( 
        <>
         <Navbar/>
         <Hero/>
         <CreateTicket/>
         <OpenAccount/>
         <Footer/>
        </>
     );
}

export default SupportPage;
