import React, {Component} from 'react';
import {connect} from 'react-redux'
class ShelfList extends Component{

    componentDidMount(){
        this.props.dispatch({
            type: `GET_ITEMS`
        })
    }
 
    render(){
        return(
        <div>
            {this.props.reduxStore.items.items.map((foodItem)=>{
                return <p key={foodItem.id}>{foodItem.description}</p>
            })}
        </div>
        )
    
    }
}

const mapStateToProps = (reduxStore) => {
    return({
        reduxStore
    })
}


export default connect(mapStateToProps)(ShelfList)