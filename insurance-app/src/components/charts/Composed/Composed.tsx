import { CurrencyFormat } from '@/components/ui';
import { useMediaQuery, useTheme } from '@/hooks';
import { formatMoney } from '@/utils';
import { Box, Text } from 'fin-ui';
import { useEffect, useState } from 'react';
import {
  Bar,
  CartesianGrid,
  Legend,
  Line,
  Area as ReArea,
  ComposedChart as ReComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BaseAxisProps } from 'recharts/types/util/types';

type AreaChartProps = {
  data: any[];
  height?: number;
  areaKeys?: string[];
  lineKeys?: string[];
  barKeys?: string[];
  colors?: string[];
  handleClick?: (data: any, index: number) => void;
  isStacked?: boolean;
  xAxis?: string;
  currency?: string;
  yAxisLabel?: string;
  yAxisOptions?: BaseAxisProps;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

const renderTooltipContent = (content: any) => {
  const { payload, label } = content;

  return (
    <div className="bg-white/80 dark:bg-blue-darker/80 backdrop-blur-sm rounded-xl px-3 py-4 border-[1.5px] border-gray-100 dark:border-gray-300">
      <p className="font-semibold mb-2 dark:text-gray-50">{label}</p>
      <ul>
        {payload.map(({ name, color, value }, index: number) => (
          <li key={index} style={{ color }} className="flex gap-2 mb-1">
            <span className="font-medium">{name}:</span>
            <span className="font-semibold">
              <CurrencyFormat amount={value} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ComposedChart = ({
  data,
  height = 300,
  areaKeys = [],
  barKeys = [],
  lineKeys = [],
  colors = ['#64EBA9', '#1e293b', '#FF801C'],
  isStacked = false,
  xAxis = 'name',
  yAxisLabel = '',
  currency = '',
  handleClick,
  yAxisOptions = {
    label: {
      value: yAxisLabel || `Amount ( ${currency} )`,
      angle: -90,
      position: 'insideLeft',
      offset: -45,
      fontWeight: 500,
    },
  },
  margin = {
    top: 20,
    right: 0,
    left: 55,
    bottom: 0,
  },
}: AreaChartProps) => {
  const [allColors, setColors] = useState(colors);
  const lightColors = ['#64EBA9', '#1e293b', '#FF801C'];
  const darkColors = ['#64EBA9', '#94a3b8', '#FF801C'];
  const matches = useMediaQuery('(max-width: 500px)');
  const { theme } = useTheme();
  if (matches) height = 200;

  useEffect(() => {
    if (theme === 'dark') {
      setColors(darkColors);
    } else {
      setColors(lightColors);
    }
  }, [theme]);

  if (data.length === 0) {
    return (
      <Box
        style={{ height: height / 1.5 }}
        className="flex items-center justify-center rounded-lg bg-gray-50 dark:bg-blue-darker/40"
      >
        <Text fontSize="lg">No data available. Change your search query.</Text>
      </Box>
    );
  }

  return (
    <ResponsiveContainer width={'100%'} height={height}>
      <ReComposedChart data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-300" />
        {areaKeys.map((_, idx) => (
          <defs key={idx}>
            <linearGradient id={idx.toString()} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={allColors[idx % allColors.length]}
                stopOpacity={0.6}
              />
              <stop
                offset="95%"
                stopColor={allColors[idx % allColors.length]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
        ))}
        <XAxis
          fontWeight={500}
          fontSize={12}
          dataKey={xAxis}
          stroke={theme === 'dark' ? '#B3BAC5' : '#333'}
        />
        <YAxis
          fontSize={12}
          fontWeight={500}
          tickFormatter={(value) => formatMoney(value)}
          stroke={theme === 'dark' ? '#B3BAC5' : '#333'}
          label={{
            ...(yAxisOptions.label as any),
            fill: theme === 'dark' ? '#ddd' : '#333',
          }}
        />
        <Tooltip content={renderTooltipContent} />
        <Legend iconType="line" iconSize={12} />
        {/* Area charts */}
        {areaKeys.map((key, idx) => (
          <ReArea
            key={idx}
            type="monotone"
            dataKey={key}
            stroke={allColors[idx % allColors.length]}
            fillOpacity={1}
            activeDot={{ r: 6 }}
            dot={{ r: 2 }}
            strokeWidth={1.5}
            fill={`url(#${idx.toString()})`}
          />
        ))}
        {/* Bar charts */}
        {barKeys.map((key, idx) => (
          <Bar
            key={key}
            dataKey={key}
            stackId={isStacked ? 'a' : undefined}
            barSize={18}
            onClick={handleClick}
            cursor={!!handleClick ? 'pointer' : 'default'}
            fill={allColors[idx % allColors.length]}
          />
        ))}
        {/* Line charts */}
        {lineKeys.map((key, idx) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={allColors[idx % allColors.length]}
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        ))}
      </ReComposedChart>
    </ResponsiveContainer>
  );
};
