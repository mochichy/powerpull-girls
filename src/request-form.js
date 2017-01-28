import React from 'react';
import './css/RequestForm.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var RequestForm = React.createClass({
    getInitialState () {
        return {
            isChecked: false
        };
    },
    
    handleChange(){
        this.setState({isChecked: event.target.checked});
    },
    
    toggleIsChecked() {
        this.setState({isChecked: !this.state.isChecked});
    },

    handleButtonClick(event) {
        this.toggleIsChecked();
    },

	render(){
		return(
            <div>
                <div className="comment-form">
                    <div className="comment">
                    <h4>Good Deeds</h4>
                    <div className="rateClass">
        			    <form onSubmit={this.props.handleSubmit}>
                            <h1>Submit New Request</h1>

                            <h3>What do you need?</h3>
                            <input required id="item" placeholder="ex: canned soup, cereal" type="text" className="validate" />

                            <p>Quantity</p>
                            <input required id="quantity" placeholder="Amount needed" type="number" className="validate" />

                            <p>Current Stock</p>
                            <input required id="stock" placeholder="Amount needed" type="number" className="validate" />

                            <p>When do you need this by?</p>
                            <input type="date" class="datepicker"/>

                            <button type="submit" className="searchCourse">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

		);
	}

});

export default RequestForm;