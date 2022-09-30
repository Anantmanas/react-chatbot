import React, { Component } from "react";


class Axios extends Component {

    constructor() {
        super();

        this.state = {
            getData: [],
            searchData:null,
            loading: false,
        };


    }

    // async componentDidMount() {
    //     let url = "https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6";
    //     let data = await fetch(url);
    //     console.log(data)
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({ getData: parsedData.getData });

    // }

    

    search(key){
        console.warn(key)
        fetch(`http://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests/${this.state.searchData}?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6`).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
    }


    render() {
        console.log("render")

        return (
            <>
                <div className="container my-3">
                    <h2>Ticket status</h2>
                    <input type ="text" onChange={(event)=>this.search(event.target.value)}/>
                    {/* <div className="row">
                        {this.state.getData.map((item) => {
                            console.log(item)
                            return <div>
                                <ul>
                                    <li>
                                        {item.status}

                                    </li>
                                </ul>
                            </div>
                        })}

                    </div> */}

             <div>
                {     
                this.state.searchData?
                      <div>
                      {
                          this.state.searchData.map((item)=>
                          <div>{item.requests.created_by.id}</div>
                          )
                      }
                  </div>
                  :"Null"
                }
             </div>









            </div>
            </>
        );
    }
}



export default Axios;
