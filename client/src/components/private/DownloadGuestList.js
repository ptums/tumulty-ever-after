import React from 'react';
import { CSVLink } from 'react-csv';
// className="btn btn-info mr-1"

const DownloadGuestlist = (props) => {
  const loadData = new Promise((resolve, reject) => {
    if (props.guests !== undefined && props.guests.length > 0) {
      resolve(props.guests);
    }else {
      reject(props.guests);
    };
  });
  const data = loadData.then(data => [...data]);
  console.log(typeof data);
  return <div>Hi</div>;
  // <CSVLink data={data} className="btn btn-info mr-1">Download</CSVLink>
};

export default DownloadGuestlist;
