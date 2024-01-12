import { get, post } from '@/core/http/fetch-wrapper';
import { getHeaders } from '@/services/utils';

export const uploadRepayments = async (
  token: string,
  body: any,
  apiUrl: string
) => {
  const sales = await post<any, any>(
    `${apiUrl}/api/upload-repayment-sheet`,
    body,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
    { raw: true }
  );
  return sales;
};

export const getRepayments = async (token: string, apiUrl: string) => {
  const repayments = await get<any[]>(
    `${apiUrl}/api/bulk-receipts-group/`,
    getHeaders(token)
  );
  return repayments[0][1];
};

