//1. import area

//1. import { someNamedImport } from somelocation/somelibrary
//2. import someDefaultImport from somelocation/somelibrary

import React,{Component} from "react";

import C from './C'


//2. definwetion area
class B extends Component{
    //1. property/veriable


    //2. constructor


    //3. methods
    render (){
        return(
            <React.Fragment>
                <h1 >
                    Dosti ka sukriya; {this.props.datab}
                </h1>
                <C datac={this.props.datab}></C>
            </React.Fragment>
        )
    }
         
    
}




//3. export area

export default B;

