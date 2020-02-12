
import React, {useState} from "react";
import PropTypes from 'prop-types';
  
import SideNavBar from "./SideNavBar.js";
import TopNavBar from "./TopNavBar.js";


function CarbonHud(props)
{
    const [isSideNavExpanded, setSideNavExpanded] = useState(true);
    return(
      <>
        <TopNavBar prop_isSideNavExpanded={isSideNavExpanded} prop_setSideNavExpanded={setSideNavExpanded}/>
        <SideNavBar prop_isSideNavExpanded={isSideNavExpanded}  features={props.features} />
      </>
    )
}

CarbonHud.propTypes = {
    features: PropTypes.object,
    prop_isSideNavExpanded: PropTypes.bool
};

export default CarbonHud;