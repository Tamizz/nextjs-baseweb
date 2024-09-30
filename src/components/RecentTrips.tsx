import * as React from 'react';
import { Table } from 'baseui/table-semantic';
import { Button, KIND } from 'baseui/button';
import { Avatar } from 'baseui/avatar';
import { ProgressBar } from 'baseui/progress-bar';
import { ListHeading } from 'baseui/list';
import { Block } from 'baseui/block';

const RecentTrips = () => {
  const data = [
    ['Li Qiao', '+1 (888) 123-4567', 'Vehicle collection', 'Pickup in 2 min • Estimated dropoff at 3:43 PM', 'Contact Driver'],
    ['Andre Tamiazzo', '+1 (888) 123-4567', 'Courtesy riders', 'Pickup in 6 min • Estimated dropoff at 3:43 PM', 'Contact Driver'],
    ['John Garvie', '+1 (888) 123-4567', 'Vehicle return', 'Dropoff at 3:59 PM PST • Heading to SFO airport', 'Support Edit'],
    ['Kevin Chen', '+1 (888) 123-4567', 'Parts delivery', 'Dropoff at 3:39 PM PST • Heading to Office A', 'Support Edit'],
  ];

  return (
    <div>
      <ListHeading
        heading="Recent trips"
        endEnhancer={() => (
          <>
            <Block marginRight="scale300">
              <Button kind={KIND.secondary} size="compact">
                In progress (7)
              </Button>
            </Block>
            <Button kind={KIND.secondary} size="compact">
              Future (12)
            </Button>
          </>
        )}
      />
      <Table
        columns={['Rider/Recipient', 'Program', 'Status', 'Actions']}
        data={data.map((row) => [
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              name={row[0]}
              size="scale800"
              overrides={{
                Root: {
                  style: { marginRight: '12px' }
                }
              }}
            />
            <div>
              <div>{row[0]}</div>
              <div>{row[1]}</div>
            </div>
          </div>,
          row[2],
          <div>
            <div>{row[3]}</div>
            <ProgressBar value={75} />
          </div>,
          <Button kind="secondary">{row[4]}</Button>
        ])}
        overrides={{
          Root: {
            style: {
              border: '2px solid #E2E2E2', // Updated to match the card component border color
              borderRadius: '12px',
              overflow: 'hidden',
              marginLeft: '16px',
              marginRight: '16px',
            },
          },
        }}
      />
    </div>
  );
};

export default RecentTrips;
