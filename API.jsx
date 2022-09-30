import React ,{ useState, useEffect } from "react";
import axios from "axios";

function API(){
    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        axios
        .get("https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/28082?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6")
        .then((res)=>setMyData(res.data))
     
    }, [])


    return(
        <>
        {/* {myData.map((post)=>{
            const {id, status, resolution} = post;
            return<div className="card" key={id}>
                <h4>{status}</h4>
                <p>{resolution}</p>
            </div>
        })} */}
        </>
    )




}export default API;