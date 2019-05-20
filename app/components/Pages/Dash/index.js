import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux'; 
import BodyWrapper from '../../Common/BodyWrapper';
import Wrapper from '../../Common/BodyWrapper/Wrapper';
import SecondaryWrapper from '../../Common/BodyWrapper/SecondaryWrapper';
import Detail from './Detail';
import DashChart from './chart';
import { getDataFromJSON } from '../../../actions/getData';
import styles from './styles.scss';

class Dash extends Component {

  componentDidMount() {
    this.props.getDataFromJSON();
  }
  render() {
    const { dataList } = this.props;
    return (
      <Wrapper>
        <h1>Demo App</h1>
        <BodyWrapper>
          <SecondaryWrapper isBG>
           {!isEmpty(dataList) && <DashChart data={dataList.data}/>}
          </SecondaryWrapper>
          <SecondaryWrapper>
            {!isEmpty(dataList) && <Detail data={dataList.data[0]}/>}
          </SecondaryWrapper>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

Dash.propTypes = {
  getDataFromJSON: PropTypes.func,
  dataList : PropTypes.any
};


function mapStateToProps(state, props) {
    return {
        dataList: state.getData
    }
}


export default connect(mapStateToProps, {getDataFromJSON})(Dash);



