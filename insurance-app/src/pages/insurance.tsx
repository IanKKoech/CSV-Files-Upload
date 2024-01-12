import React, { useState } from 'react';

import { Page } from '@/components/shared';
import { Button, DropDown, Text } from 'fin-ui';

export default function Reports() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropDownChange = (selectedValue) => {
    setSelectedValue(selectedValue.value);
  };

  return (
    <Page title="Dashboard" description="">
      <div className="w-3/12 h-16">
        <div className="mb-2">
          <Text>Upload required files below</Text>
        </div>
        <div className="mb-2">
          <DropDown
            options={[
              {
                label: 'Funeral Policy',
                value: 'funeral',
              },
              {
                label: 'Indlu Loan Data',
                value: 'indlu',
              },
              {
                label: 'Smart Advance Credit',
                value: 'smart',
              },
            ]}
            onChange={handleDropDownChange}
            name="Policy"
            value={selectedValue}
          />
        </div>
      </div>
      <br />

      <form className='mt-3'>
        <input type="file" name="" id="" />
        <br />
        <br />
        <Button
          color="warning"
          loadingText="Uploading file"
          size="md"
          variant="outline"
        >
          Submit file
        </Button>
      </form>
    </Page>
  );
}
