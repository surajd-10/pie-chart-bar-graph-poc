interface IData {
  name: string;
  value: number;
  color?: string;
}

export interface IPieChartProps {
  chartOptions: {
    data: IData[];
    legends?: {
      show?: boolean;
      textStyle?: {
        color: string;
      };
    };
    seriesLabel?: {
      show?: boolean;
      color?: string;
    };
  };
  onChartReadyCallback?: () => void;
  theme?: string;
}
