import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { Upload, Plus } from "baseui/icon";
import BellFilled from '@uber/icons/bell-filled';

const Header: React.FC = () => {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.white,
            padding: '0',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
          })
        }
      }}
    >
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <h1>Uber Central</h1>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center}>
        <NavigationItem>
          <Button endEnhancer={() => <Plus size={16} />}>
            Acme CO Dealership
          </Button>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <ButtonGroup>
            <Button>
              <Upload size={24} />
            </Button>
            <Button>
              <BellFilled size={24} />
            </Button>
          </ButtonGroup>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
};

export default Header;