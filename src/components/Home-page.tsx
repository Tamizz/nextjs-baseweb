import * as React from 'react';
import { useStyletron } from 'baseui';
import Sidebar from './Sidebar';
import RecentTrips from './RecentTrips';
import Suggestions from './Suggestions';
import BookingTemplates from './BookingTemplates';

const HomePage = () => {
  const [css, theme] = useStyletron();

  return (
    <div className={css({
      display: 'flex',
      height: 'calc(100vh - 64px)',
      overflowY: 'auto',
    })}>
      <Sidebar />
      <div className={css({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        overflowY: 'auto',
      })}>
        <BookingTemplates />
        <RecentTrips />
        <Suggestions />
      </div>
    </div>
  );
};

export default HomePage;
