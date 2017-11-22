import React from 'react'

const refreshRate = 0.5;
let tokenRefresh = null;

class Login extends React.Component {


    componentDidMount() {
        this.props.login();

        if (this.props.user && this.props.user.jwt) {
            let waitTime = this.props.jwt.expirationSeconds * refreshRate * 1000;
            tokenRefresh = waitTime + new Date().getTime();

         } else {
            tokenRefresh = 5 * 1000;
        }


        setTimeout(this.props.refreshLogin, tokenRefresh);
    }

    render() {

        const loggedIn = () => {

            return <div>
                <p>Herzlich Willkommen {this.props.user.data}</p>
                {this.props.content()}
            </div>

        };

        const loggedOut = () => {

            return <div>
                <p>Du bist leider nicht in Stepnova angemeldet.</p>
            </div>

        };

        return this.props.user.data ? loggedIn() : loggedOut();

    }

}

export default Login