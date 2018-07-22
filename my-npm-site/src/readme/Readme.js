import React from 'react';
import {Link} from 'react-router';

import store from '../Store'

class Readme extends React.Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.state = this.getOwnState()
    }

    getOwnState(){
        const items = store.getState().items;
        const item = items.find(item => item.name === this.props.params.name)
        return {
            item: item
        }
    }
    onChange(){
        this.setState(this.getOwnState())
    }
    componentDitMount(){
        store.subscribe(this.onChange)
    }
    componentWillUnMount(){
        store.unsubscribe(this.onChange)
    }

    render() {
    	const {readme} = this.state.item;
        return (
            <div>
            <div>
            <Link to="/">返回</Link>
            </div>
            <div dangerouslySetInnerHTML={{__html: readme}}></div>
            </div>
        );
    }
}

export default Readme