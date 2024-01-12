import { formatPhoneNumber } from '@/utils';
import { useSession } from 'next-auth/react';
import { PatternFormat } from 'react-number-format';

export const PhoneFormat = ({ phone }: { phone: string }) => {
  const {
    data: { workflow },
  } = useSession({ required: true });
  const { countryCode } = workflow[0];
  let format = '+### ### ### #######';
  if (countryCode.length === 1) {
    format = '+# ### ### #######';
  }
  if (countryCode.length === 2) {
    format = '+## ### ### #######';
  }
  return (
    <PatternFormat
      value={formatPhoneNumber(countryCode, phone)}
      format={format}
      displayType="text"
    />
  );
};
