import React, {Component} from 'react';
import Tic_tac_toe from '../../component/Tic_tac_toe/Tic_tac_toe';

export default class Community extends Component {
    render() {
        return (
            <div className="community">
                this is Community~
                <Tic_tac_toe />
            </div>
        )
    }
}