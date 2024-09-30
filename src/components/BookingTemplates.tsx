import * as React from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Grid, Cell } from 'baseui/layout-grid';
import { Plus } from 'baseui/icon';
import { ComponentType } from 'react';

const BookingTemplateCard = ({ icon: Icon, title, description }: {
  icon: ComponentType<{ size: number }>;
  title: string;
  description: string;
}) => (
  <Card>
    <StyledBody>
      <Icon size={32} />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledBody>
  </Card>
);

const BookingTemplates = () => {
  return (
    <div>
      <h2>Booking templates</h2>
      <Grid>
        <Cell span={[4, 4, 3]}>
          <BookingTemplateCard
            icon={() => <Plus size={24} />}
            title="Vehicle collection"
            description="Collect vehicles from customers"
          />
        </Cell>
        <Cell span={[4, 4, 3]}>
          <BookingTemplateCard
            icon={() => <Plus size={24} />}
            title="Vehicle return"
            description="Return vehicles to customers"
          />
        </Cell>
        <Cell span={[4, 4, 3]}>
          <BookingTemplateCard
            icon={() => <Plus size={24} />}
            title="Parts delivery"
            description="Deliver and pickup car parts"
          />
        </Cell>
        <Cell span={[4, 4, 3]}>
          <BookingTemplateCard
            icon={() => <Plus size={24} />}
            title="Send a technician"
            description="Dispatch technician for service"
          />
        </Cell>
        <Cell span={[4, 4, 3]}>
          <BookingTemplateCard
            icon={() => <Plus size={24} />}
            title="Courtesy riders"
            description="Ride benefit to customers"
          />
        </Cell>
      </Grid>
    </div>
  );
};

export default BookingTemplates;
