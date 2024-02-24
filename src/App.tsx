import { FC } from 'react';
import PieChart from './components/PieChart/PieChart';
import HorizontalBarGraph from './components/HorizontalBarGraph/HorizontalBarGraph';
import './style.css';

const chartData = [
  { value: 1048, name: 'Search Engine', color: 'gray' },
  { value: 735, name: 'Direct', color: 'pink' },
  { value: 580, name: 'Email', color: 'red' },
  { value: 484, name: 'Union Ads', color: 'green' },
  { value: 300, name: 'Video Ads', color: 'lightblue' },
];

const chartOptions = {
  data: chartData,
  legends: {
    textStyle: {
      color: 'white',
    },
  },
  seriesLabel: {
    color: 'white',
  },
};

const graphOptions = {
  stackMetaData: [
    { name: 'Home', color: 'red' },
    { name: 'Away', color: 'pink' },
  ],
  data: {
    CHW: { Home: 10, Away: 23 },
    CHC: { Home: 60, Away: 20 },
    BOS: { Home: 25, Away: 19 },
    BAL: { Home: 48, Away: 4 },
    ATL: { Home: 5, Away: 10 },
    ARI: { Home: 11, Away: 31 },
  },
};

export const App: FC<{ name: string }> = ({ name }) => {
  const onChartReadyCallback = (): void => {
    console.log('here');
  };

  return (
    <div style={{ backgroundColor: '' }}>
      <PieChart
        onChartReadyCallback={onChartReadyCallback}
        chartOptions={chartOptions}
        theme="dark"
      />
      <HorizontalBarGraph
        onChartReadyCallback={onChartReadyCallback}
        chartOptions={graphOptions}
        theme="dark"
      />
    </div>
  );
};
