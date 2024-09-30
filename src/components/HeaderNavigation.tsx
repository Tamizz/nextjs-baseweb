import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from 'baseui/header-navigation';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { ChevronDown, Search, Plus } from 'baseui/icon';
import { Avatar } from 'baseui/avatar';

const Header: React.FC = () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <h1>Uber Central</h1>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
          <Button endEnhancer={() => <Plus size={24} />}>
            Acme CO Dealership
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Input
            placeholder="Search here..."
            endEnhancer={() => <Plus size={24} />}
          />
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind="tertiary">
            <Plus size={24} />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind="tertiary">
            <Plus size={24} />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Avatar name="AT" size="scale800" />
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default Header;