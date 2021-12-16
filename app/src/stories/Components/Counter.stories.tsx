import React, { useCallback } from 'react';
import store from '@redux/store';
import Counter from '@components/Counter';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import { Provider, useDispatch } from 'react-redux';
import { counterClear, counterDecrease, counterIncrease } from '@redux/actionCreator/counter';

export default {
  title: 'Components/Couner',
  component: Counter,
  decorators: [(Story: Story) => <Provider store={store}><Story /></Provider>]
}

const Template: Story = ({ }) => {
  const dispatch = useDispatch();

  const onIncrease = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterIncrease());
  }, []);

  const onDecrease = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterDecrease());
  }, []);

  const onClear = useCallback((
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    dispatch(counterClear());
  }, []);
  return (
    <StoryWrapper>
      <Counter 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClear={onClear}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
};
