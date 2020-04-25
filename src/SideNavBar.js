
import React from "react";
import PropTypes from 'prop-types';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
} from "carbon-components-react/lib/components/UIShell";

import "./gen.css";

var ActiveItem = "";

function handler (children) {
  return children.map( ( subOption ) => {
    if (!subOption.children ) {
      return(
        <SideNavLink
          key={subOption.name}
          onClick={() => ActiveItem = subOption.name}
          isActive={ActiveItem === subOption.name}
          large
        >
          {subOption.name}
        </SideNavLink>
      )
    }
    return (
        <SideNavMenu title={subOption.name} large>
          { handler( subOption.children ) }
        </SideNavMenu>
    )
  })
}


function SideNavBar (props) {  
  return (
    <div className="container">
      <SideNav
        isFixedNav
        expanded={props.prop_isSideNavExpanded}
        isChildOfHeader={true}
        aria-label="Side navigation"
        large
      >
        <SideNavItems>
          { handler( props.features.data ) }
        </SideNavItems>
      </SideNav>
  </div>
  );
}

SideNavBar.propTypes = {
  features: PropTypes.object,
  prop_isSideNavExpanded: PropTypes.bool
};

export default SideNavBar;