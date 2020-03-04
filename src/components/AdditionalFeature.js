import React from 'react';



const AdditionalFeature = props => {




  console.log('props inside AdditionalFeature', props)

  return (
    <li>
      
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.item.name} (+{props.item.price})
    </li>
  );
};



export default AdditionalFeature;
 