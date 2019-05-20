import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Pie} from 'react-chartjs-2';
import SecondaryWrapper from '../../Common/BodyWrapper/SecondaryWrapper';
import styles from './styles.scss';
class DashChart extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      Data: []
    };
  }
  componentDidMount() {
    const { data } = this.props;
    console.log(data);
    let names = data.map(el =>el.name);
    let values = data.map(el =>el.value)
    this.setState({
      Data: {
        labels: names,
        datasets:[
           {
              label:'Demo',
              data: values,
              backgroundColor:[
               'rgba(255,105,145,0.6)'
            ]
           }
        ]
      }
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div className={styles.chartContainer}> 
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
      </div>
    );
  }
}


export default DashChart;

