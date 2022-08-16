import React, { Component } from 'react';
import '../dashboard.css';

class JoinTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="mainComponentJT">
                <h2 className='text-center mb-3 text-info'>Join Teams</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Team Code..."
                    />
                <button className="btn btn-sm btn-primary">Q</button>
                </form>
            </div>

        );
    }
}

export default JoinTeam;