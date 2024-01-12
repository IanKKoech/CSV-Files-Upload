import React, { useState } from 'react';
import { Page } from '@/components/shared';
import { Button, DropDown } from 'fin-ui';

export default function Reports() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropDownChange = (selectedValue) => {
    setSelectedValue(selectedValue.value);
    console.log(selectedValue);
  };

  return (
    <Page title="Dashboard" description="">
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
      <br />
      
      <form>
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
