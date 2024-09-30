import * as React from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Grid, Cell } from 'baseui/layout-grid';
import { Tag } from 'baseui/tag';
import { ListHeading } from 'baseui/list';

const Suggestions = () => {
  return (
    <div>
      <ListHeading
        heading="Suggestions"
        maxLines={1}
      />
      <Grid>
        <Cell span={[4, 8, 6]}>
          <Card
            overrides={{
              Root: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  borderBottomWidth: '0',
                }
              }
            }}
          >
            <StyledBody>
              <h3>Request your group trip now</h3>
              <p>Luxury vans to coach buses. Get instant pricing and request.</p>
              <Button>Try Uber Charter</Button>
            </StyledBody>
            <img src="/path-to-van-image.jpg" alt="Van" style={{ width: '40%', height: 'auto' }} />
          </Card>
        </Cell>
        <Cell span={[4, 8, 6]}>
          <Card
            overrides={{
              Root: {
                style: {
                  backgroundColor: '#000080',
                  color: 'white',
                }
              }
            }}
          >
            <StyledBody>
              <h3>Airport Rides</h3>
              <p>Request a ride to or from the airport. Rides at 700+ airports</p>
              <Button>Try reserve airport</Button>
            </StyledBody>
            <img src="/path-to-airplane-image.jpg" alt="Airplane" style={{ width: '40%', height: 'auto' }} />
          </Card>
        </Cell>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button size={SIZE.compact} kind="secondary">Uber voucher</Button>
        <Button size={SIZE.compact} kind="secondary">Large cars</Button>
        <Button size={SIZE.compact} kind="secondary">Uber Reserve</Button>
        <Button size={SIZE.compact} kind="secondary">Hourly Ride</Button>
        <Button size={SIZE.compact} kind="secondary">Uber Green</Button>
      </div>
    </div>
  );
};

export default Suggestions;
