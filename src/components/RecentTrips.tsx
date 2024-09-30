import * as React from 'react';
import { Table } from 'baseui/table';
import { Button } from 'baseui/button';
import { Tag } from 'baseui/tag';
import { Avatar } from 'baseui/avatar';
import { ProgressBar } from 'baseui/progress-bar';

const RecentTrips = () => {
  const data = [
    ['Li Qiao', '+1 (888) 123-4567', 'Vehicle collection', 'Pickup in 2 min • Estimated dropoff at 3:43 PM', 'Contact Driver'],
    ['Andre Tamiazzo', '+1 (888) 123-4567', 'Courtesy riders', 'Pickup in 6 min • Estimated dropoff at 3:43 PM', 'Contact Driver'],
    ['John Garvie', '+1 (888) 123-4567', 'Vehicle return', 'Dropoff at 3:59 PM PST • Heading to SFO airport', 'Support Edit'],
    ['Kevin Chen', '+1 (888) 123-4567', 'Parts delivery', 'Dropoff at 3:39 PM PST • Heading to Office A', 'Support Edit'],
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Recent trips</h2>
        <div>
          <Tag closeable={false}>In progress (7)</Tag>
          <Tag closeable={false}>Future (12)</Tag>
        </div>
      </div>
      <Table
        columns={['Rider/Recipient', 'Program', 'Status', 'Actions']}
        data={data.map((row) => [
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar name={row[0]} size="scale800" marginRight="scale300" />
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
      />
    </div>
  );
};

export default RecentTrips;
