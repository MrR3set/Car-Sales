import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from "../actions/carActions"


const AdditionalFeature = props => {
  const addF = () =>{
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addF}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
