import * as React from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Button, SIZE } from 'baseui/button';
import { ListItem, ListItemLabel } from 'baseui/list';
import { ListHeading } from 'baseui/list';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

const Suggestions = () => {
  return (
    <div>
      <ListHeading
        heading="Suggestions"
        maxLines={1}
      />
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '16px 0' }}>
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 3]}
          flexGridColumnGap="scale300"
          flexGridRowGap="scale300"
          overrides={{
            Block: {
              style: {
                display: 'flex',
                flexWrap: 'nowrap',
                margin: '0 8px',
              },
            },
          }}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <FlexGridItem 
              key={index}
              overrides={{
                Block: {
                  style: {
                    padding: '0 8px',
                    flexShrink: 0,
                    width: '336px', // 320px card width + 16px padding
                  },
                },
              }}
            >
              <Card
                overrides={{
                  Root: {
                    style: {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }
                  }
                }}
              >
                <StyledBody>
                  <h3>Request your group trip now</h3>
                  <p>Luxury vans to coach buses. Get instant pricing and request.</p>
                  <Button size={SIZE.compact}>Try Uber Charter</Button>
                </StyledBody>
                <img src="/path-to-van-image.jpg" alt="Van" style={{ width: '40%', height: 'auto' }} />
              </Card>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </div>
      
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {['Uber voucher', 'Large cars', 'Uber Reserve', 'Hourly Ride', 'Uber Green'].map((item, index) => (
          <ListItem key={index}>
            <ListItemLabel>{item}</ListItemLabel>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
