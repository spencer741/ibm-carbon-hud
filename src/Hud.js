
import React from "react";
import PropTypes from 'prop-types';


import TopNav from './TopNav.js';


function Hud(props)
{
  return(
    <TopNav SideNavFeatures={props.features}/>

  )

}


Hud.propTypes = {
  features: PropTypes.object,
  prop_isSideNavExpanded: PropTypes.bool
};

export default Hud;