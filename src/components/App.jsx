import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from 'components/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = state.good + state.neutral + state.bad;

  const onLeaveFeedback = propName => {
    setState(prevState => {
      const value = prevState[propName];
      return { ...prevState, [propName]: value + 1 };
    });
  };

  const countFeedbackPercentage = propName => {
    if (!total) {
      return 0;
    }
    const value = state[propName];
    const percentage = ((value / total) * 100).toFixed(0);
    return Number(percentage);
  };

  return (
    <>
      <Section title={'Please leave a feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(state)}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            percentage={countFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

// countFeedbackPercentage = propName => {
//   const total = this.countTotalFeedback();
//   //if total = false=(0)
//   if (!total) {
//     return 0;
//   }
// const value = this.state[propName];
// const percentage = ((value / total) * 100).toFixed(0);
// return Number(percentage);
//   };

// onLeaveFeedback = propName => {
//   this.setState(prevState => {
//     return {
//       [propName]: prevState[propName] + 1,
//     };
//   });
// };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePrcentage = this.countFeedbackPercentage('good');

// return (
//   <>
//     <Section title={'Please leave a feedback'}>
//       <FeedbackOptions
//         onLeaveFeedback={this.onLeaveFeedback}
//         options={Object.keys(this.state)}
//       />
//     </Section>
//     <Section title={'Statistics'}>
//       {total === 0 ? (
//         <Notification message={'There is no feedback'} />
//       ) : (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           percentage={positivePrcentage}
//         />
//       )}
//     </Section>
//   </>
// );
//   }
// }
