import Hero from'./Hero';
import Brokerage from'./Brokerage';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
 
function PricingPages() {
    return ( 
            <>
              <Navbar/>
              <Hero/>
              <Brokerage/>
              <OpenAccount/>
              <Footer/>
            </>
     );
}

export default PricingPages;