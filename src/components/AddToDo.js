import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {
    
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add To-Do..."
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

// Prop Types
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}

export default AddToDo
