import React from "react";
import Palace from "../../media/grid/the-palace.jpg";
import Invitation from "../../media/grid/the-invitation.jpg";
import PeterRachel from "../../media/grid/rachel-peter-cropped.jpg";
import Hotel from "../../media/grid/fairfield-cropped-1.jpg";
import Transportation from "../../media/grid/transportation-cropped.jpg";
import Flowers from "../../media/grid/flowers-cropped.jpg";
import "./index.css";

const SelectionGrid = () => (
 <div className="SelectionGrid">
  <div className="cell cell-1"> 
     <a href="http://www.tumultyeverafter.com/events" title={"events"}>
       <img src={Palace} alt="the palace" className="cell-image"/>
       <div className="cell-content">
        <p>What time is the Church? What time is the reception? All your answers here.</p>
       </div>
     </a>
  </div>
  <div className="cell cell-2">
   <a href="http://www.tumultyeverafter.com/rsvp" title={"rsvp"}>
      <img src={Invitation} alt="rsvp" className="cell-image"/>
      <div className="cell-content">
         <p>We are looking forward to celebrating with you please let us know if you can make it.</p>
      </div>
    </a>
  </div>
  <div className="cell cell-3"> 
    <a href="http://www.tumultyeverafter.com/about-us">
       <img src={PeterRachel} alt="peter rachel" className="cell-image" />
       <div className="cell-content">
        <p>More about the happy couple.</p>
       </div>
    </a>
  </div>
  <div className="cell cell-4"> 
    <a href="http://www.tumultyeverafter.com/accomodations">
       <img src={Hotel} alt="fairfield inn" className="cell-image" />
       <div className="cell-content">
        <p>Reserve your night(s) at the Fairfield Inn & Suites Marriot</p>
       </div>
    </a>
  </div>
  <div className="cell cell-5">
   <a href="http://www.tumultyeverafter.com/registry">
      <img src={Flowers} alt="registry" className="cell-image" />
      <div className="cell-content">
        <p>Curious about our registry? Find out more here.</p>
      </div>
    </a>
  </div>
  <div className="cell cell-6"> 
   <a href="http://www.tumultyeverafter.com/transportation">
      <img src={Transportation} alt="transportation" className="cell-image" />
      <div className="cell-content">
        <p>How to get around!</p>
      </div>
    </a>
  </div>
 </div>
 
);

export default SelectionGrid;