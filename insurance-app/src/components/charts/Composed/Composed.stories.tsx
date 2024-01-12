import { Meta, StoryObj } from '@storybook/react';
import { ComposedChart } from './Composed';
import { dailySales } from '@/mocks/data';
import { formatGraphDate } from '@/utils';

type DailySales = {
  name: string;
  'Sales Total': number;
  'Daily Target': number;
};
const transformDailySales = (data: any[]): DailySales[] => {
  return data.map(({ sales_total, daily_target, target_date }) => ({
    name: formatGraphDate(target_date),
    'Sales Total': sales_total,
    'Daily Target': daily_target,
  }));
};

export default {
  title: 'Charts/ComposedChart',
  component: ComposedChart,
  args: {
    data: transformDailySales(dailySales),
    currency: '$',
    height: 350,
  },
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'The data for the chart.',
    },
    height: {
      control: { type: 'number' },
      description: 'The height of the chart.',
    },
    areaKeys: {
      control: { type: 'object' },
      description: 'Keys for area data series.',
    },
    lineKeys: {
      control: { type: 'object' },
      description: 'Keys for line data series.',
    },
    barKeys: {
      control: { type: 'object' },
      description: 'Keys for bar data series.',
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors for the chart series.',
    },
    isStacked: {
      control: { type: 'boolean' },
      description: 'If true, the chart series will be stacked.',
    },
    xAxis: {
      control: { type: 'text' },
      description: 'The key for the x-axis data.',
    },
  },
} as Meta<typeof ComposedChart>;

type Story = StoryObj<typeof ComposedChart>;

export const Bar: Story = {
  args: {
    data: transformDailySales(dailySales),
    barKeys: ['Sales Total'],
    currency: '$',
  },
};

export const Line: Story = {
  args: {
    lineKeys: ['Sales Total'],
    currency: '$',
  },
};

export const Area: Story = {
  args: {
    areaKeys: ['Sales Total'],
    currency: '$',
  },
};

export const MoreArea: Story = {
  args: {
    areaKeys: ['Daily Target', 'Sales Total'],
    currency: '$',
  },
};

export const StackedBar: Story = {
  args: {
    barKeys: ['Sales Total', 'Daily Target'],
    currency: '$',
    isStacked: true,
  },
};

export const ComposedBarLine: Story = {
  args: {
    barKeys: ['Daily Target'],
    lineKeys: ['Sales Total'],
    currency: '$',
  },
};

// export const WithCustomColors: Story = {
//   args: {
//     barKeys: ['Sales Total', 'Daily Target'],
//     currency: '$',
//     isStacked: true,
//     colors: ['red', 'blue'],
//   },
// };
