import React, {Component} from 'react';
class ShelfList extends Component{
 
    render(){
        return(
        <>
            <h1>Hi I'm A Shelf</h1>
            <input placeholder="description"/>
            <input placeholder="image_url"/>
            <button>Add to Shelf</button>
        </>
        )
    
    }
}
export default ShelfList