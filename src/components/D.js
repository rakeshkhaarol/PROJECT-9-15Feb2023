//1. import area
//1.1 import { someNamedImport } from somelocation/somelibrary
//1.2 import someDefaultImport from somelocation/somelibrary

import React, { Component } from "react";

import E from './E'


//2. definetion area
class D extends Component{
    render (props){
        return(
            <>
                <h1>Ada kru;   {this.props.datad}</h1>
                <E datae={this.props.datad}></E>
            </>
        )
    }
}



//3. export area

export default D;

