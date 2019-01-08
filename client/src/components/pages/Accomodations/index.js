import React from "react";
import createHistory from "history/createBrowserHistory";
import "./index.css";

const history = createHistory();


const Accomodations = () => (
  <div className="Accomodations container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card mt-4">
          <div className="card-body text-center">
            <h1 class="card-title text-center">Accomodations -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text">A block of rooms is being held at <a href="https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Cusumano%20Tumulty%20Wedding%5Esosfi%60CTMCTMA%7CCTMCTMB%60129.00%60USD%60false%605%603/29/19%603/31/19%602/28/19&app=resvlink&stop_mobi=yes" target="_blank" rel="noopener noreferrer">The Fairfield Inn & Suites Somerset by Marriott</a> for our event. The address is 315 Davidson Avenue Somerset, NJ 08873.</p>
            <p className="card-text">Please use the above link or call 732-627-8483 by <strong>2/28/19</strong> to make your reservation. If calling be sure to mention the Cusumano Tumulty Wedding to receive the special rate of $129 (+tax) per night. The hotel block will include complimentary breakfast and a continuously running shuttle to and from The Palace.</p>
            <p className="card-text"><strong>*Booking Online:</strong> We recommend you use <a href="https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Cusumano%20Tumulty%20Wedding%5Esosfi%60CTMCTMA%7CCTMCTMB%60129.00%60USD%60false%605%603/29/19%603/31/19%602/28/19&app=resvlink&stop_mobi=yes" target="_blank" rel="noopener noreferrer">this direct link</a> which will take you to our group’s designated booking page. If you end up going through the hotel’s general reservation page you can enter Group Code <strong>“CTMCTMB”</strong> for a room with two beds OR Group Code <strong>“CTMCTMA”</strong> for a room with one bed.</p>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Accomodations;