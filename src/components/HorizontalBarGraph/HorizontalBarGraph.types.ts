interface IData {
  name: string;
  value: number;
  color?: string;
}

export interface IHorizontalBarGraphProps {
  onChartReadyCallback?: () => void;
  theme?: string;
  chartOptions: {
    stackMetaData: {
      name: string;
      color?: string;
    };
    data: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
}
