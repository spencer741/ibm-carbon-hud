
import React from "react";
import PropTypes from 'prop-types';
import {useState} from "react";

import {
    Content,
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
    HeaderSideNavItems,
    SkipToContent,
    SideNav,
    // Temporarily comment these out until they are needed again
    // SideNavHeader,
    // SideNavDetails,
    // SideNavSwitcher,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    Switcher,
    SwitcherItem,
    SwitcherDivider,
  } from "carbon-components-react/lib/components/UIShell";

  import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';
  
import SideNavBar from "./SideNavBar.js";

function TopNav(props)
{
    const [isSideNavExpanded, setSideNavExpanded] = useState(true);



    return(
        <>
        <Header aria-label="IBM Platform Name">
              
              <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              
              <HeaderGlobalBar >
                <HeaderGlobalAction
                  aria-label="Search"
                  >
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              
            </Header>
            <SideNavBar prop_isSideNavExpanded={isSideNavExpanded} features={props.SideNavFeatures} />
            </>

    )
}


TopNav.propTypes = {
    SideNavFeatures: PropTypes.object,
    prop_isSideNavExpanded: PropTypes.bool
  };

  export default TopNav;