import { PieChart } from './Pie';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  args: {
    title: 'Pie Chart Title',
    colors: ['#64EBA9', '#1e293b', '#FF801C'],
    data: [
      { name: 'A', value: 30 },
      { name: 'B', value: 50 },
      { name: 'C', value: 20 },
    ],
    size: 180,
    isTooltipDisabled: false,
    className: '',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the pie chart.',
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors for the chart slices.',
    },
    data: {
      control: { type: 'object' },
      description: 'The data for the pie chart.',
    },
    innerText: {
      control: { type: 'text' },
      description: 'Text to be displayed in the center of the pie chart.',
    },
    size: {
      control: { type: 'number' },
      description: 'The size of the pie chart.',
    },
    label: {
      control: { type: 'boolean' },
      description: 'If true, labels will be displayed on the chart slices.',
    },
    isTooltipDisabled: {
      control: { type: 'boolean' },
      description: 'If true, tooltips will be disabled on the chart.',
    },
    className: {
      control: { type: 'text' },
      description: 'Classes to be applied to the pie chart.',
    },
  },
} as Meta<typeof PieChart>;

type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  args: {},
};

export const CustomInnerText: Story = {
  args: {
    innerText: 'Sales',
  },
};

export const NoCustomInnerText: Story = {
  args: {
    innerText: '',
  },
};

export const WithoutTooltips: Story = {
  args: {
    isTooltipDisabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 100,
    isTooltipDisabled: true,
  },
};
