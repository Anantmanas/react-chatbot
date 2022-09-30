import React, { useState } from "react";


//https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6

const api = {
    key: "8D159009-91E6-42D7-81ED-944B7AFA2DC6",
    base: "https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/"
  }
  
  function Data() {
    const [query, setQuery] = useState('');
    const [items, setitems] = useState([]);
    const [status, setStatus] = useState({});
    const [resolution, setResolution] = useState({});
    const [resolutionSubmittedOn, setrsd] = useState({});

   function handleData(e)
   {
    e.preventDefault();
   }
    
  
    const search = evt => {
      if (evt.key !== "Enter"  &&  evt.key === "Enter") {
        fetch(`${api.base}${query}?TECHNICIAN_KEY=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setitems(result.request);
            setStatus(result.request.status);
            setResolution(result.request.resolution);
            setrsd(result.request.resolution.submitted_on);
            console.log(result.request);
            setQuery('');
            
          });
      }
    

    }
    function extractTextFromHTML(str) {
      let htmlRegexG = /<(?:"[^"]"['"]|'[^']'['"]|[^'">]|"[#"])+>/g;
      return str.replace(htmlRegexG, '');
    }

  
  
    return (

      <main>
        <div className="container ticket-container">
          <div className="search-box my-3 text-center">
            <h4>Ticket Search</h4>
            <hr></hr>
            <form onSubmit={handleData}>
            <input
              type="text"
              name="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              required

            />
            </form>

          </div>

          {status.name !== undefined ? (

            <div className="card ticket-card my-3" >
              <h4>Ticket Status :</h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="span-title">TICKET-NO : </span>  {items.id}</li>
                <li className="list-group-item"><span className="span-title">STATUS : </span>  {status.name}</li>
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

// function Data() {
 
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function getUsers() {
//       const response = await fetch('https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6', {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//         },
//       });

//       const data = await response.json();

//       setUsers(data);
//     }

//     getUsers();
//   }, []);

//   console.log(users);

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h2>
//             Name: {user.requests}
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Data;









// export default class Data extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       data:false
//     }
//   }

//   componentDidMount()
//   {
//     let url ="https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/5000?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6";
//     fetch(url,{
//       method:'GET',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json',
//       }
//     }).then((result)=>{
//       result.json().then((resp)=>{
//        this.setState({data:resp})
//       })
//     })
//   }


//   render(){
//     const data = this.state.data;
//     console.log(data);
//     return(
//       <div>
//         {
//           data ?
//           <div>
//           <h2>Status:{data.request.approval_status}</h2>
//           </div>
//           :<p>Please wait...</p>
//         }
//       </div>
//     )
//   }

// }







// import React, { useEffect, useState } from "react";
// // const express = require ("express")
// // const app = express()
// // const cors = require("cors")
// // app.use(
// //     cors({
// //         origin:"*",
// //     })
// // )

// function Data(){

//   const [users, setUsers] = useState([]);

//   useEffect(()=>{
//     async function getUsers(){
//       const response = await fetch('https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/5000?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6',{
//         method:'GET',
//         headers:{
//           accept:'application/json',
//         }
//       })

//       const data = await response.json();

//       setUsers(data.results);
//     }

//     getUsers();
//   },[]);

//   console.log(users);

//   return(
//     <>
//     <div>
//       {users.map(user =>(
//         <div key={user.requests}>
//           <h2>
//             status: {user.status.name}
//             resolution : {user.resolution.content}
//             submitted_on : {user.submitted_on.display_value}
//           </h2>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }



//   export default Data;