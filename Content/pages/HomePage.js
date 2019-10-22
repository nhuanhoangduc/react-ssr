import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        console.log('hahaah')
    }
    
    onButtonClicked = () => {
        alert();
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { name } = this.props;

        console.log('meo meo')

        return (
            <div id="HomePage">
                <div>Hello {name}</div>

                <button onClick={this.onButtonClicked}>
                    Alert
                </button>
            </div>
        );
    }
}


global.HomePage = HomePage;

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
