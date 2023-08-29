const React = require('react');

class Index extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <a href='/flights/new'> Create a new Flight </a>
                </nav>
              <h1>  Flight Index Page </h1>
              

        <ul>
                {this.props.flights?.map((flight, i) =>{
                    return(
                        <li key={i}>
                            Airline: {flight.airline} 
                            Flight No: {flight.flightNo}, and 
                            Departure: {new Date(flight.departs).toLocaleString()}
                        </li>
                    )
                }
                )}
              </ul>
            
            </div>
        )
    }
}

module.exports = Index;