import React from 'react';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";

export const Header = () => (
    <HeaderNavigation overrides={{ Root: { style: { marginBottom: "25px" } } }}>
        <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>Assessment Utility by RisingStack</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        {/* <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
                <Button>Get started</Button>
            </StyledNavigationItem>
        </StyledNavigationList> */}
    </HeaderNavigation>
);