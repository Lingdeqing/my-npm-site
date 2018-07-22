import React from 'react';

import store from '../Store';
import * as Actions from '../Actions';

import Add from '../add/Add';
import Item from './Item';

export default class List extends React.Component{
    constructor(props){
        super(props)

        this.state = this.getOwnState();
        this.onChange = this.onChange.bind(this)
    }

    getOwnState() {
        return {
            items: store.getState().items.filter(item => item.visible)
        }
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnMount() {
        store.unsubscribe(this.onChange)
    }

    render(){
        const {items} = this.state;
        if(items.length === 0){
            return (<Add name="hehe"/>);
        } else {
            return (<ul className="list">
                {
                    items.map(item => (
                        <Item
                            key={item.id}
                            pack={item}
                        />
                    ))
                }
                    </ul>);
        }
    }
}