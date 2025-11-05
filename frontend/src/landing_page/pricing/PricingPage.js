import Hero from'./Hero';
import Brokerage from'./Brokerage';
import Charges from './Charges';
import Turnover from './Turnover';

import OpenAccount from '../OpenAccount';

 
function PricingPages() {
    return ( 
            <>
             
              <Hero/>
              <Brokerage/>
              <OpenAccount />
              <Charges/>
              <Turnover/>
              
            </>
     );
}

export default PricingPages;