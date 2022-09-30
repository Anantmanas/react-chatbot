import React, { useState } from "react";
import './style.css'


//https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6
//https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/28082?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6


const api = {
  key: "8D159009-91E6-42D7-81ED-944B7AFA2DC6",
  base: "https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/"
}


const Data = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState('');
  const [status, setStatus] = useState({});
  const [resolution, setResolution] = useState({});
  const [resolutionSubmittedOn, setrsd] = useState({});



  const search = evt => {
    if ( evt.key === "Enter" && query !== '') {
      fetch(`${api.base}${query}?TECHNICIAN_KEY=${api.key}`)
        .then(res => res.json()) 
        .then(result => {  
         if(result.request !== undefined ){ 
          console.log(result)           
            setItems(result.request);
            setStatus(result.request.status);
            setResolution(result.request.resolution);
            setrsd(result.request.resolution.submitted_on);
           
            
          }
          else
          {
            alert("INVALID TICKET NO. ❌ \n Kindly, Check the data you've entered and TRY AGAIN !");       
          }       
        
          setQuery('');

          
        });
       
    }
    
  }

  function extractTextFromHTML(str) {
    let htmlRegexG = /<(?:"[^"]"['"]|'[^']'['"]|[^'">]|"[#"])+>/g;
    return str.replace(htmlRegexG, '');
  }

  // condition ? (<Div>) : null
  return (
   
      <main>
        <div className="container ticket-container">
          <div className="search-box my-3 text-center">
            <h4>Ticket Search</h4>
            <hr></hr>
            <input
              type="text"
              name="searchbar"
              placeholder="Search..."
              required onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}

            />
            
          </div>
         
          {status.name !== undefined ?  (
          
          
            <div className="card ticket-card my-3" >
              <h4>Ticket Status :</h4>
              <ul className="list-group list-group-flush">                
                <li className="list-group-item"><span className="span-title">TICKET-NO : </span> {items.id}</li>
                <li className="list-group-item"><span className="span-title">STATUS : </span>  {status.name}</li>
                <li className="list-group-item"><span className="span-title">DESCRIPTION : </span>{extractTextFromHTML(items.description)}</li>
                <li className="list-group-item"><span className="span-title">RESOLUTION : </span>{extractTextFromHTML(resolution.content)}</li>
                <li className="list-group-item"><span className="span-title">SUBMITTED_ON : </span> {resolutionSubmittedOn.display_value}</li>
              </ul>
              
            </div>
          )
          
            : <small className="text-success">(Enter only valid ticket number !)</small>}
             
             
        </div>
        
      </main>
  

  );

}

export default Data;




// .then((res)=>{
//   if(res.status >=200 && res.status <=299){
//     return res.json();
//   }else{
//     throw Error(res.statusText);
//   }
// })
// .then((result)=>{
//   if(result.request !== undefined){
//     setItems(result.request);
//     setStatus(result.request.status);
//     setResolution(result.request.resolution);
//     setrsd(result.request.resolution.submitted_on);
//   }
//   else{
//     alert("INVALID TICKET NO. ❌ \n Kindly, Check the data you've entered and TRY AGAIN !");
//   }
         
// }).catch((err)=>{
//   console.log(err);
// })

// setQuery('');
// }
