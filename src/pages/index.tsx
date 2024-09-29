import * as React from 'react';
import { Button } from 'baseui/button';
import { useStyletron } from 'baseui';
import Header from '../components/Header';

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <div>
      <Header />
      <div className={css({ padding: '20px' })}>
        <Button onClick={() => console.log('hey')}>Hello</Button>
        <p className={css({color: theme.colors.accent600})}>Styled by hook</p>
      </div>
    </div>
  );
};

export default Index;
