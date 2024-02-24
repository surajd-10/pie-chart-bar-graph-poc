import ReactECharts from 'echarts-for-react';
import { IPieChartProps } from './PieChart.types';

const transformDataIntoChartFormat = (data) => {
  return data.map(({ name, value, color }) => {
    return {
      name,
      value,
      itemStyle: { color },
    };
  });
};

const getOptions = ({ data, legends = {}, seriesLabel = {} }) => {
  return {
    title: {
      text: '',
      subtext: '',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      icon: 'circle',
      ...legends,
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: transformDataIntoChartFormat(data),
        label: { ...seriesLabel },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
};

const PieChart: React.FC<IPieChartProps> = ({
  chartOptions,
  onChartReadyCallback,
  theme,
}) => {
  return (
    <ReactECharts
      option={getOptions(chartOptions)}
      notMerge={true}
      lazyUpdate={true}
      onChartReady={onChartReadyCallback}
      theme={theme}
    />
  );
};

export default PieChart;
