import { useSession } from 'next-auth/react';
import { NumericFormat } from 'react-number-format';

import { getCurrency } from '@/utils';

export const CurrencyFormat = ({
  amount = 0,
  className = '',
}: {
  amount: number | string;
  className?: string;
}) => {
  const { data: session } = useSession({ required: true });

  const getPrefix = () => {
    // if (!amount) return '';
    if (session) {
      return getCurrency(session.workflow).symbol;
    }
    return '$';
  };

  return (
    <NumericFormat
      value={+amount}
      className={className}
      displayType="text"
      decimalScale={2}
      fixedDecimalScale={!Number.isInteger(+amount)}
      prefix={getPrefix()}
      thousandSeparator
    />
  );
};
