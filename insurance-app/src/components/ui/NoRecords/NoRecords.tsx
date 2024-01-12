import { Box, Flex, Text, cn } from 'fin-ui';
import { TbTrashOff } from 'react-icons/tb';

export const NoRecords = ({
  message = 'No records found in the database.',
  className = '',
}) => (
  <Flex className={cn('py-24', className)} justify="center">
    <Box>
      <TbTrashOff className="h-20 mb-2 w-auto mx-auto text-center block text-danger/80" />
      <Text
        align="center"
        color="muted"
        fontWeight="bold"
        className="first-letter:uppercase"
      >
        {message}
      </Text>
    </Box>
  </Flex>
);
