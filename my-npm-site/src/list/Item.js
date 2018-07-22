import React from 'react';
import {Link} from 'react-router';

import store from '../Store';
import * as Actions from '../Actions';

export default class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {name, latestVersion, versions, intro, keywords} = this.props.pack;
        return (
            <li className="list-item">
                <h3><Link to={'/readme/'+name}>{name}</Link></h3>
                <dl>
                    <dt>latest: </dt>
                    <dd>{latestVersion}</dd>
                </dl>
                <dl>
                    <dt>versions: </dt>
                    <dd>
                        <ul>
                        {
                            versions.map(version => <li><span>{version.version}</span>{version.exist ? '已存在' : '同步此版本'}</li>)
                        }
                        </ul>
                    </dd>
                </dl>
                <p className="intro">{intro}</p>
                <ul className="keywords">
                    {
                        keywords.map(keyword => <li>{keyword}</li>)
                    }
                </ul>
                <p><a href={'https://www.npmjs.com/package/'+name}>npm源</a></p>
            </li>
        );
    }
}