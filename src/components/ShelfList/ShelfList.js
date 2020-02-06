import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ShelfList extends Component {

    state = {
        description: '',
        image_url: '',
        user_id: 0
    }

    componentDidMount() {
        this.props.dispatch({
            type: `GET_ITEMS`
        })
        this.handleId();
    }

    handleDes = (event) => {
        this.setState({
            description: event.target.value
        });
        console.log(event.target.value);
    }

    handleImg = (event) => {
        this.setState({
            image_url: event.target.value
        })
        console.log(event.target.value);

    }

    handleId = () => {
        this.setState({
            user_id: this.props.reduxState.user.id
        })
    }

    addToShelf = () => {
        this.props.dispatch({
            type: 'POST_ITEM',
            payload:
                this.state

        })
    }


    render() {
        console.log(this.state);

        return (
            <>
                <h1>Hi I'm A Shelf</h1>
                <input placeholder="description" onChange={this.handleDes} />
                <input placeholder="image_url" onChange={this.handleImg} />
                <button onClick={this.addToShelf}>Add to Shelf</button>

                <div>
                    {this.props.reduxState.items.items.map((foodItem) => {
                        return <p key={foodItem.id}>{foodItem.description}</p>
                    })}
                </div>

            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ShelfList)
