import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import {
  Tile,
  TILE_KIND,
  StyledParagraph
} from "baseui/tile";
import CarCheckFrontFilled from '@uber/icons/car-check-front-filled';

const BookingTemplates: React.FC = () => {
  const templates = [
    { icon: CarCheckFrontFilled, title: "Vehicle collection", description: "Collect vehicles from customers" },
    { icon: CarCheckFrontFilled, title: "Vehicle return", description: "Return vehicles to customers" },
    { icon: CarCheckFrontFilled, title: "Parts delivery", description: "Deliver and pickup car parts" },
    { icon: CarCheckFrontFilled, title: "Send a technician", description: "Dispatch technician for service" },
    { icon: CarCheckFrontFilled, title: "Courtesy riders", description: "Ride benefit to customers" },
  ];

  return (
    <Grid>
      {templates.map((template, index) => (
        <Cell span={[4, 4, 6]} key={index}>
          <Tile
            tileKind={TILE_KIND.selection}
            label={template.title}
            leadingContent={() => <template.icon size={24} />}
            onClick={() => console.log(`Clicked on ${template.title}`)}
          >
            <StyledParagraph>{template.description}</StyledParagraph>
          </Tile>
        </Cell>
      ))}
    </Grid>
  );
};

export default BookingTemplates;
