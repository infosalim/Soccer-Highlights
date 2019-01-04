import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            error: false,
            success: false
        }
    }


    saveSubscription = email => {
       const URL_EMAIL = `http://localhost:3004/subcriptions`;
       fetch(URL_EMAIL, {
           method: 'post',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({email})
       }).then(res => res.json())
       .then(() => {
           this.setState({
               email:''
           })
       })
    }

    handleSubmit = event => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email);
        }else{
            ///
        }
    }

    onChangeInput = event => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <div className='subscribe-panel'>
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        placeholder='youremail@email.com'
                        value={this.state.email}
                        onChange={this.onChangeInput}
                        />
                    </form>
                </div>
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
            </div>
        );
    }
}

export default Subscriptions;