import React, { Component } from 'react'
import TicketStatus from './TicketStatus';


class Ticket extends Component {

  constructor() {
    super();

    this.state = {
      items: [],
      loading: false,
      page: 1,
    };

  }

  async componentDidMount() {
    let url = 'https://crmdemo.radicalminds.in/intranet/corsbypass.php?input_data=https://helpdesk.radicalminds.in/api/v3/requests?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6';
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData + "parsedData");
    this.setState({ items: parsedData.items })

  }

  // handlePrevclick = async () => {
  //   let url = "https://helpdesk.radicalminds.in/api/v3/requests/5000?TECHNICIAN_KEY=8D159009-91E6-42D7-81ED-944B7AFA2DC6";
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData + "parsedData");
  //   this.setState({
  //     page: this.state.page - 1,
  //     items: parsedData.items
  //   })


  // }

  // handleNextclick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&pagesize=1&apiKey=c834ac4678054e8b82ce4ac8de3e048a&page=${this.state.page + 1}&pageSize=1`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData + "parsedData");
  //   this.setState({
  //     page: this.state.page + 1,
  //     items: parsedData.items
  //   })

  // }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2> Ticket Status</h2>
        <div className="row">
          {this.state.items.map((element) => {   
            return <div className="col-xl-12 col-md-8" key={element.url}>
              <TicketStatus status={element.status}
                resolution={element.resolution} submitted_on={element.submitted_on}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">

          {/* <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePrevclick}>&#8920;</button>
          <button type="button" className='btn btn-dark' onClick={this.handleNextclick}>&#8921;</button> */}
        </div>

      </div>


    )
  }

}


export default Ticket;
