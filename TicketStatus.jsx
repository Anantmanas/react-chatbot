import React, { Component } from 'react'

export class TicketStatus extends Component {
    render() {
        let {status, resolution, submitted_on} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                  
                    <div className="card-body">
                        <h5 className="card-title">{status}</h5> 
                        <p className="card-text">{resolution}</p>
                        <p className="card-text">{submitted_on}</p>
                        <a href="/" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TicketStatus;
