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
      height: 'calc(100vh - 64px)',
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
        <Suggestions />
      </div>
    </div>
  );
};

export default HomePage;
