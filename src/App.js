import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {buyItem, removeFeature} from './actions/carAction'


const App = (props) => {
  console.log('calling props in app', props)



  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    additionalPrice: state.carReducer.car,
    car: {
      price: state.car.price,
      name: state.name,
      image:state.image,
      features:state.features
    },
    additionalFeatures: [state.additionalFeatures]
  }
}

export default connect(mapStateToProps, null)(App);
