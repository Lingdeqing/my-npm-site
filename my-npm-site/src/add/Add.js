import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.name}/>
                <select>
                    <option value="latest">latest</option>
                    <option value="2.1.0">2.1.0</option>
                </select>
            </div>
        );
    }
}

export default Add