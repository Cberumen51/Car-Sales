import React from 'react';


const AddedFeature = props => {



  console.log('this is props in added features', props)

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.features}
    </li>
  );
};

export default AddedFeature;
