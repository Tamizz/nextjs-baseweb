import * as React from 'react';
import { Navigation } from 'baseui/side-navigation';
import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { useStyletron } from 'baseui';

const Sidebar = () => {
  const [css, theme] = useStyletron();
  const [activeItemId, setActiveItemId] = React.useState('#home');

  return (
    <div
      className={css({
        width: '320px',
        height: '100%',
        padding: '24px',
        overflowY: 'auto',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white,
        borderRight: `1px solid ${theme.colors.borderOpaque}`,
      })}
    >
      <Button
        overrides={{
          BaseButton: {
            style: {
              width: '100%',
              marginBottom: '16px',
              height: '48px',
            }
          }
        }}
        endEnhancer={() => <ChevronDown size={24} />}
      >
        Create new
      </Button>
      <Navigation
        items={[
          { title: 'Home', itemId: '#home' },
          { title: 'In progress', itemId: '#in-progress' },
          { title: 'Future', itemId: '#future' },
          { title: 'Past', itemId: '#past' },
          { title: 'Draft & templates', itemId: '#draft-templates' },
        ]}
        activeItemId={activeItemId}
        onChange={({ item }) => item.itemId && setActiveItemId(item.itemId)}
      />
    </div>
  );
};

export default Sidebar;
