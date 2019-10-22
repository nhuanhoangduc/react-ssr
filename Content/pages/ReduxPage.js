import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


class ReduxPage extends React.Component {

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


global.ReduxPage = ReduxPage;

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
