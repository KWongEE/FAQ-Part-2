import React from 'react';

const LauncherInformation = props => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  )
}

export default LauncherInformation;
