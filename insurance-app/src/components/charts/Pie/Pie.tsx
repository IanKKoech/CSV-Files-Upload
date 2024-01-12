import { Box, Flex, Text, cn } from 'fin-ui';
import { NumericFormat } from 'react-number-format';
import { Cell, Pie as RePie, PieChart as RePieChart, Tooltip } from 'recharts';

const renderTooltipContent = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/80 dark:bg-blue-darker/80 dark:border-gray-300 backdrop-blur-sm rounded-xl px-3 py-4 border-[1.5px] border-gray-100">
        <p className="font-semibold mb-2 dark:text-white">{label}</p>
        <ul>
          {payload.map(({ name, value }, index: number) => (
            <li key={index} className="flex gap-2 mb-1 dark:text-white">
              <span className="font-medium w-max">{name}:</span>
              <span className="font-semibold">
                <NumericFormat
                  value={value}
                  displayType="text"
                  decimalScale={2}
                  fixedDecimalScale
                  suffix="%"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export const PieChart = ({
  title,
  colors,
  data,
  innerText = '',
  size = 200,
  label = false,
  isTooltipDisabled = false,
  className = '',
}) => {
  if (data.length === 0) {
    return (
      <Box
        style={{ height: size }}
        className="my-6 flex aspect-square items-center justify-center rounded-full border-2 border-gray-100 bg-gray-50 dark:bg-blue-darker/40 dark:border-gray-300"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" align="center">
            {data.length}
          </Text>
          <Text fontWeight="medium" align="center" color="muted">
            {title}
          </Text>
        </Box>
      </Box>
    );
  }
  return (
    <Box className={cn('relative w-max py-6', className)}>
      <Flex
        justify="center"
        align="center"
        className="pointer-events-none z-0 absolute inset-0"
      >
        <Box>
          <Text
            fontSize={size <= 100 ? 'xl' : '3xl'}
            fontWeight="bold"
            align="center"
          >
            {innerText || data.length}
          </Text>
          {size > 100 && (
            <Text fontWeight="medium" align="center" color="muted">
              {title}
            </Text>
          )}
        </Box>
      </Flex>
      <RePieChart width={size} height={size}>
        {!isTooltipDisabled && <Tooltip content={renderTooltipContent} />}
        <RePie
          dataKey="value"
          data={data}
          innerRadius={size / 2 - 12}
          outerRadius={size / (size <= 100 ? 2.2 : 2)}
          fill="#8884d8"
          label={label}
        >
          {data.map((_: any, index: number) => (
            <Cell
              stroke="transparent"
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </RePie>
      </RePieChart>
    </Box>
  );
};
