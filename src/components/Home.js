import React, { Component } from 'react';

// Component
import Featured from './Featured';

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            home: ''
        }
    }

    componentDidMount(){
        fetch(URL_HOME, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({
                    home: json
                })
            })
    }

    render(){
        return (
            <div>
                <Featured slides={this.state.home.slider}/>
            </div>
        );
    }
}

export default Home;