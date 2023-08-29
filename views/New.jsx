const React = require('react');
class New extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    New Flight Page

                </h1>
                <form action="/flights" method="POST">
                    <label htmlFor="airline">Airline:</label>
                    <select name="airline" id="airline">
                        <option value="American">American</option>
                        <option value="Southwest">Southwest</option>
                        <option value="United">United</option>
                    </select><br />
                    <label htmlFor="flightNo">Flight No:</label>
                    <input type="number" name="flightNo" id="flightNo" min="10" max="9999" required /><br />
                    <label htmlFor="departs">Departure:</label>
                    
                    <input type="submit" value="Add Flight" />
                </form>

            </div>
        )
    }
}

module.exports = New ;