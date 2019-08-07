import React, {Component} from 'react';
import {SketchField, Tools} from 'react-sketch';

 
class SketchFieldCanvas extends React.Component {
     render() {
        return (
            <SketchField width='100%' 
                         height='100%' 
                         tool={Tools.Pencil} 
                         lineColor='hotpink'
                         lineWidth={3}/>
        )
     }
}

export default SketchFieldCanvas;