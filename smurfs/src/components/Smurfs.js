import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSmurfs } from '../store/actions';

import Smurf from './Smurf';

const SmurfsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    flex-wrap: wrap;
`;

class Smurfs extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if(this.props.isFetchingSmurfs) {
            return <h2>Loading Smurfs...</h2>
        }

        return (
            <SmurfsContainer>
                {this.props.smurfs && this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
            </SmurfsContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetchingSmurfs: state.isFetchingSmurfs,
        isAddingSmurf: state.isAddingSmurf,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);