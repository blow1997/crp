import React  from 'react';
import './welcomp.css';



class Hello extends React.Component{
    render(){
        return(
            <div>
                hello {this.props.name}{this.props.age}
            </div>
        );
    }
}
export default Hello;
