import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Library extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var headings = this.props.headings.map(function(heading){
			return(<th>{heading}</th>);
		});
		var data = this.props.data.map(function(datapoint){
			return(<tr><td>{datapoint.name}</td><td>{datapoint.book}</td><td>{datapoint.date}</td></tr>)
		});
		return <div><table><thead>{headings}</thead><tbody>{data}</tbody></table></div>
	};
}

var headings = ["Name", "Book's Name", "Issuing Date"];
var data = [{"name" : "sandeep", "book" : "networking", "date" : "21st Jan 2008"},
{"name" : "mayur", "book" : "C++", "date" : "22st Jan 2008"},
{"name" : "sanman", "book" : "moral support", "date" : "21st Mar 2008"}]

ReactDOM.render(<Library headings={headings} data={data}/>, document.getElementById('root'));