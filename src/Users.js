import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';


var Users = React.createClass({
	getInitialState(){
		return{promises:[]}
	},

	componenetDidMount(){
		$.get('./data/promises.csv').then(function(data) {
		    var parsed = Baby.parse(data, {header:true});
		    	this.setState({promises:parsed.data})
		}.bind(this));
	},

	render(){
	    console.log(promises);

		let userKeys = Object.keys(this.state.promises).filter((d) => {
			return this.state.promises[d].company === "A"  //this.props.companyName

		});


		return(
			<div className="users">
				{userKeys.map((d) => {
					return (
						<p>haha</p>

					)


				})}



			</div>
		);
	}

});

export default Users;