import React from 'react';
import { connect } from 'react-redux';
import {removeFeature} from "../actions/carActions"

const AddedFeature = props => {
  const remF = () =>{
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={remF}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeFeature})(AddedFeature);
