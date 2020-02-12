
import React, {useState} from "react";
import PropTypes from 'prop-types';

import {
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
} from "carbon-components-react/lib/components/UIShell";

import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';


function TopNavBar(props)
{
    const [getActiveItem, setActiveItem] = useState(null);
    return(
      <>
        <Header aria-label="IBM Platform Name">
          <HeaderMenuButton
            aria-label="Open menu"
            isCollapsible
            onClick={() => props.prop_setSideNavExpanded(!props.prop_isSideNavExpanded)}
            isActive={props.prop_isSideNavExpanded}
          />
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
          <HeaderGlobalBar >
            {["Search","Notifications","App Switcher"].map(name => (
              <HeaderGlobalAction
                aria-label={name}
                key={name}
                onClick={() => setActiveItem(() => name)}
                isActive={getActiveItem === name}
              >
                {
                  name === "Search" ? <Search20 /> :
                  name === "Notifications" ? <Notification20 /> : 
                  name === "App Switcher" ? <AppSwitcher20 /> : null
                }
              </HeaderGlobalAction>
            ))}
          </HeaderGlobalBar>
        </Header>
        {
          getActiveItem === "Search" ||
          getActiveItem === "Notifications" ||
          getActiveItem === "App Switcher" ?  
          <HeaderPanel aria-label="Header Panel" expanded />
          : null
        }
      </>
    )
}

TopNavBar.propTypes = {
    prop_setSideNavExpanded: PropTypes.func,
    prop_isSideNavExpanded: PropTypes.bool
};

export default TopNavBar;