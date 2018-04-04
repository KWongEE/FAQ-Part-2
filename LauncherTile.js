import React from 'react';
import {Link} from 'react-router';

const LauncherTile = props => {
  return(
    <div>
      <Link to={`/launcher/${props.id}`}><h1>{props.name}</h1></Link>
    </div>
  )
}

export default LauncherTile
