import React, {useState, useEffect} from 'react'


const GetData = () =>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("https://helpdesk.radicalminds.in/api/v3/requests/5000?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6").then(res =>{
            const items = res.data;
            setItems(items);
        })
    }, []);
  

    return(
        <div>
            GETDATA
            <ul>
                {items.map(element =>(
                    <li  key = {element.url}>
                        {element.resolution}
                    </li>
                ))}
            </ul>
        </div>
    )
 
  
}
export default GetData;


