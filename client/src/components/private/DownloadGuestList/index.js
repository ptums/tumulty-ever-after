import React from "react";
import { CSVLink } from "react-csv";

const DownloadGuestlist = (props) => {
  if (props.guests !== undefined) {
    return <CSVLink data={props.guests} className="btn btn-info mr-1">Download</CSVLink>
  }
  return <button type="button" className="btn btn-info mr-1" disabled>Download</button>;
};
export default DownloadGuestlist;
