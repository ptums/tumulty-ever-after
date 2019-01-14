import React from "react";
import createHistory from "history/createBrowserHistory";
import "./index.css";

const history = createHistory();


const Transportation = () => (
  <div className="Transportation container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
          <div className="card-body text-center">
            <h1 class="card-title text-center">Transportation -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text"><strong>Coming In:</strong></p>
            <p className="card-text"><strong>Flying:</strong> If you’re flying in, <a href="https://www.google.com/maps/dir/Newark+Liberty+International+Airport+(EWR),+3+Brewster+Rd,+Newark,+NJ+07114/Fairfield+Inn+%26+Suites+by+Marriott+Somerset,+315+Davidson+Ave,+Somerset,+NJ+08873/data=!4m8!4m7!1m2!1m1!1s0x89c252e1c5ec0cef:0xb3f3b437c5d7f286!1m2!1m1!1s0x89c3c0ec66b7199b:0x2e87c0fd16c0e736!3e0?ved=2ahUKEwixzM-Qke7fAhUFuVkKHag4B_IQox0wAHoECAUQEA" target="_blank" rel="noopener noreferrer">Newark International Airport</a> is approximately 35 minutes away by car to Fairfield Inn & Suites (our recommend hotel).<br/><strong>Train:</strong> For those taking the train, the New Brunswick train station is only a <a href="https://www.google.com/maps/dir/New+Brunswick+Train+Station,+New+Brunswick,+NJ/Fairfield+Inn+%26+Suites+by+Marriott+Somerset,+315+Davidson+Ave,+Somerset,+NJ+08873/@40.5147671,-74.5282066,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x89c3c65136f969cf:0xb5038c2b1f334f8a!2m2!1d-74.44618!2d40.496475!1m5!1m1!1s0x89c3c0ec66b7199b:0x2e87c0fd16c0e736!2m2!1d-74.5301986!2d40.5317698!3e0" target="_blank" rel="noopener noreferrer">15 minute drive</a> to Fairfield Inn & Suites. If you're planning to take the train in the morning of, it's approximately <a href="https://www.google.com/maps/dir/New+Brunswick+Train+Station,+New+Brunswick,+NJ/St+Cecilia's+Roman+Catholic,+County+Road+681,+Monmouth+Junction,+NJ/@40.4438341,-74.5443131,12z/data=!4m14!4m13!1m5!1m1!1s0x89c3c65136f969cf:0xb5038c2b1f334f8a!2m2!1d-74.44618!2d40.496475!1m5!1m1!1s0x89c3dcb63c398559:0x5b8152fcdd62811!2m2!1d-74.5221831!2d40.3871231!3e0" target="_blank" rel="noopener noreferrer">30 minutes</a> by car to St. Cecilia's Catholic Church.</p>
            <p className="card-text"><strong>The Day Of:</strong></p>
            <p className="card-text">The ceremony will take place at St. Cecilia's Catholic Church in Dayton NJ. The church is a 30 minute drive from Fairfield Inn & Suites. For more specific directions check out the following: <a href="https://www.google.com/maps/dir/Fairfield+Inn+%26+Suites+by+Marriott+Somerset,+315+Davidson+Ave,+Somerset,+NJ+08873/St+Cecilia's+Roman+Catholic,+County+Road+681,+Monmouth+Junction,+NJ/@40.4640334,-74.5982701,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c3c0ec66b7199b:0x2e87c0fd16c0e736!2m2!1d-74.5301986!2d40.5317698!1m5!1m1!1s0x89c3dcb63c398559:0x5b8152fcdd62811!2m2!1d-74.5221831!2d40.3871231!3e0" target="_blank" rel="noopener noreferrer">Fairfield Inn & Suites to St. Cecilia's</a>
            </p>
            <p className="card-text">The reception will be held later that night at The Palace located in Somerset, NJ. The Palace is situated less than 5 minutes away from Fairfield Inn & Suites and they will be providing shuttle service to and/from the reception.</p>
            <p className="card-text"><strong>Public Transportation</strong></p>
            <p className="card-text">Public transportation isn't available in the are so access to a car is necessary. Ubers/Lyfts/etc. are plentiful in the area, as well as options to rent a car. Please let us know if we can provide more information or assist in coordinating transportation.
            </p>
            <p className="card-text"><strong>Specific Addresses</strong></p>
            <p className="card-text">
              <strong>Hotel:</strong>  Fairfield Inn & Suites by Marriott Somerset 315 Davidson Ave, Somerset, NJ 08873<br/>
              <strong>Ceremony:</strong>  St. Cecilia's Roman Catholic Church 10 Co Rd 681, Monmouth Junction, NJ 08852<br/>
              <strong>Reception:</strong> The Palace at Somerset Park 333 Davidson Ave, Somerset, NJ 08873
            </p>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Transportation;