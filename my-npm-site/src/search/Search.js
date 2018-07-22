import React from 'react';

import store from '../Store';
import * as Actions from '../Actions';

export default 	class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: ''
        }
    }

    search(keywords){
    	this.setState({
            keywords: keywords
        }, ()=>{
    		store.dispatch(Actions.search(this.state.keywords))
        })
    }

    render() {
        return (
        	<div>
            <input type="text" className="search" onChange={(e) => this.search(e.target.value)} value={this.state.keywords}/>
            <button type="button" onClick={() => this.search('')}>清空</button>
        	</div>
        );
    }
}