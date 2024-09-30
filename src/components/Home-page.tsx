import * as React from 'react';
import { useStyletron } from 'baseui';
import Sidebar from './Sidebar';
import RecentTrips from './RecentTrips';
import Suggestions from './Suggestions';

const HomePage = () => {
  const [css, theme] = useStyletron();

  return (
    <div className={css({
      display: 'flex',
      height: 'calc(100vh - 64px)', // Subtract header height
      marginTop: '64px', // Add margin to account for fixed header
      overflowY: 'hidden', // Changed from 'auto' to 'hidden'
    })}>
      <Sidebar />
      <div className={css({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        overflowY: 'auto',
      })}>
        <RecentTrips />
        <div className={css({ marginTop: '24px' })}>
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
