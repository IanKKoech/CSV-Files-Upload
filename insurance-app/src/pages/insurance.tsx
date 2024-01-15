import React, { useState } from 'react';

import { Page } from '@/components/shared';
import { Button, DropDown, Text } from 'fin-ui';
import nProgress from 'nprogress';
import { toast } from 'sonner';

export default function Reports() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [file, setFile] = useState(null);

  const handleDropDownChange = (selectedValue) => {
    setSelectedValue(selectedValue.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error('No file selected');
      toast.error('Please upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('csv_file', file);

    const apiRoute = getApiRoute(selectedValue);

    try {
      nProgress.start();
      const res = await fetch(
        `http://127.0.0.1:8000/csvapp/api/${apiRoute}/`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();
      toast.success('Success', {
        description: 'File has been uploaded successfully',
      });
      setSelectedValue('');
      setFile(null);

      
    } catch (error) {
      console.error('Error uploading file', error);
      toast.error('Error', {
        description: 'File upload failed',
      });
    } finally {
      nProgress.done();
    }
  };

  const getApiRoute = (selectedValue) => {
    switch (selectedValue) {
      case 'funeral':
        return 'funeral_policies';
      case 'indlu':
        return 'indlu_loan_data_list';
      case 'smart':
        return 'smart_credit_info_list';
      default:
        return '';
    }
  };

  return (
    <Page title="Dashboard" description="">
      <div className="w-3/12 h-16 mt-14">
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

      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          type="file"
          name="csv_file"
          id="file"
          onChange={handleFileChange}
        />
        <br />
        <br />
        <Button
          type="submit"
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
