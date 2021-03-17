import React from 'react';
import { deleteFeature } from '../actions'
import { connect } from 'react-redux';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick={() => props.dispatch(deleteFeature(props.feature))}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps)(AddedFeature);
