import ReactECharts from 'echarts-for-react';
import { IHorizontalBarGraphProps } from './HorizontalBarGraph.types';

const transformDataIntoChartFormat = (stackMetaData, data) => {
  return stackMetaData.map((item) => {
    return {
      name: item.name,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        align: 'right',
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: item.color,
      },
      data: Object.keys(data).map((d) => data[d][item.name]),
    };
  });
};

const getOptions = ({ stackMetaData, data }) => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      icon: 'circle',
    },
    grid: {
      left: '5%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: Object.keys(data),
    },
    series: transformDataIntoChartFormat(stackMetaData, data),
  };
};

const HorizontalBarGraph: React.FC<IHorizontalBarGraphProps> = ({
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

export default HorizontalBarGraph;
