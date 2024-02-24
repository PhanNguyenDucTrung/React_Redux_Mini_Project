import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';
export default class LifeCycleReact extends Component {
    constructor(props) {
        super(props);
        // set initial state in the constructor.
        this.state = {
            number: 1,
        };
        // console.log('constructor');
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('getDerivedStateFromProps');
        // console.log('NextProps: ', nextProps, prevState);

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render in parent component');
        return (
            <div className='container'>
                <div className='p-4'>
                    <h1 className='display-4 text-center'>LifeCycleReact</h1>
                </div>

                <button
                    className='btn btn-success '
                    onClick={() => {
                        this.setState({ number: this.state.number + 1 });
                    }}>
                    Click me
                </button>
                <span className='ms-2 badge bg-secondary'>{this.state.number}</span>

                {this.state.number % 3 === 0 ? null : <ChildComponent />}
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log('State đầu tiên', this.state.number); // 1
        // code with side effects to componentDidMount
        this.setState({ number: 2 }, () => {
            // console.log(this.state.number);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('Previous state: ', prevState.number);
        console.log('Current state: ', this.state.number);
    }
}
