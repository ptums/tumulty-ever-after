import React from "react";
import createHistory from "history/createBrowserHistory";
import "./index.css";

const history = createHistory();


const Registry = () => (
  <div className="Registry container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
          <div className="card-body text-center">
            <h1 class="card-title text-center">Registry -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text">Please know that our presence is the only present we need! We are registered with Zola and if  you would like to check out our registry page you can visit the following link: <a href="https://www.zola.com/registry/tumultyeverafter" target="_blank" rel="noopener noreferrer">https://www.zola.com/registry/tumultyeverafter</a></p>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Registry;