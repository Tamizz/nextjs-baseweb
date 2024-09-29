import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";

const Header: React.FC = () => {
  const [css, theme] = useStyletron();

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <span className={css({ fontWeight: 'bold', marginRight: '4px' })}>
            Uber for Business
          </span>
          <ChevronDown size={20} />
        </StyledNavigationItem>
        <StyledNavigationItem>
          <span className={css({ color: theme.colors.contentSecondary, fontSize: '14px' })}>
            Acme CO Travel with an very [...]ong name in #ee2332
          </span>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Input
            placeholder="Search here..."
            overrides={{
              Root: {
                style: {
                  width: '240px',
                  backgroundColor: theme.colors.backgroundTertiary,
                  borderRadius: '20px',
                }
              },
              StartEnhancer: {
                style: {
                  paddingLeft: '12px',
                }
              },
              Input: {
                style: {
                  backgroundColor: 'transparent',
                }
              }
            }}
            startEnhancer={() => <span>🔍</span>}
          />
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind="tertiary">
            <span role="img" aria-label="Help">❓</span> Help
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind="tertiary">
            <span role="img" aria-label="Notifications">🔔</span>
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button
            kind="secondary"
            overrides={{
              BaseButton: {
                style: {
                  backgroundColor: theme.colors.backgroundInversePrimary,
                  color: theme.colors.contentInversePrimary,
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              }
            }}
          >
            AT
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}

export default Header;
