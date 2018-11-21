import React from 'react';
import Palace from '../media/grid/the-palace.jpg';
import Invitation from '../media/grid/the-invitation.jpg';
import PeterRachel from '../media/grid/rachel-peter-cropped.jpg';
import Hotel from '../media/grid/fairfield-cropped-1.jpg';

const SelectionGrid = () => (
 <div className="SelectionGrid">
  <div className="cell cell-1"> 
     <img src={Palace} alt="the palace" className="cell-image"/>
     <div className="cell-content">
     	<h3>Events</h3>
     </div>
  </div>
  <div className="cell cell-2"> 
    <img src={Invitation} alt="rsvp" className="cell-image"/>
    <div className="cell-content">
       <h3>RSVP</h3>
    </div>
  </div>
  <div className="cell cell-3"> 
     <img src={PeterRachel} alt="peter rachel" className="cell-image rp-pic" />
     <div className="cell-content">
     	<h3>About Us</h3>
     </div>
  </div>
  <div className="cell cell-4"> 
     <img src={Hotel} alt="fairfield inn" className="cell-image" />
     <div className="cell-content">
     	<h3>Accomodations</h3>
     </div>
  </div>
  <div className="cell cell-5"> 
    <img src={Hotel} alt="fairfield inn" className="cell-image" />
    <div className="cell-content">
    	<h3>Registry</h3>
    </div>
  </div>
  <div className="cell cell-6"> 
    <img src={Hotel} alt="fairfield inn" className="cell-image" />
    <div className="cell-content">
      <h3>Transportation</h3>
    </div>
  </div>
 </div>
 
);

export default SelectionGrid;