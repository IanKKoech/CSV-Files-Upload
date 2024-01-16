import { FC, ReactNode } from 'react';

import Head from 'next/head';

import { Box, BreadCrumbs, Container, Text } from 'fin-ui';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  canonicalURL?: string;
  children: ReactNode;
}

export const Page: FC<Props> = ({
  children,
  title = '',
  description = '',
  image = '',
  canonicalURL = '',
}) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{`Insurance App | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="image" content={image} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:url" content="" />
        <meta name="og:site_name" content="" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:alt" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        {canonicalURL && <link rel="canonical" href={canonicalURL} />}
      </Head>
      <div className="flex items-center h-20 self-center bg-slate-200 ml-8">
        <a href="/">
          <svg
            className="w-[8.4rem] text-gray-400 relative -left-3 dark:text-white transition duration-200 ease-linear"
            width="180"
            height="93"
            viewBox="0 0 180 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5822 17.7695C31.2508 17.7695 35.0382 21.557 35.0382 26.2256C35.0382 30.8942 31.2508 34.6816 26.5822 34.6816C21.9136 34.6816 18.1262 30.8942 18.1262 26.2256C18.1262 21.557 21.9136 17.7695 26.5822 17.7695Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M45.7272 17.7695C50.3958 17.7695 54.1832 21.557 54.1832 26.2256C54.1832 30.8942 50.3958 34.6816 45.7272 34.6816C41.0586 34.6816 37.2712 30.8942 37.2712 26.2256C37.2712 21.557 41.0586 17.7695 45.7272 17.7695Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M64.8722 17.7695C69.5408 17.7695 73.3282 21.557 73.3282 26.2256C73.3282 30.8942 69.5408 34.6816 64.8722 34.6816C60.2037 34.6816 56.4163 30.8942 56.4163 26.2256C56.4163 21.557 60.2037 17.7695 64.8722 17.7695Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M26.5822 37.0625C31.2508 37.0625 35.0382 40.8499 35.0382 45.5185C35.0382 50.1871 31.2508 53.9746 26.5822 53.9746C21.9136 53.9746 18.1262 50.1871 18.1262 45.5185C18.1262 40.8499 21.9136 37.0625 26.5822 37.0625Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M45.7272 37.0625C50.3958 37.0625 54.1832 40.8499 54.1832 45.5185C54.1832 50.1871 50.3958 53.9746 45.7272 53.9746C41.0586 53.9746 37.2712 50.1871 37.2712 45.5185C37.2712 40.8499 41.0586 37.0625 45.7272 37.0625Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M26.5822 56.3281C31.2508 56.3281 35.0382 60.1156 35.0382 64.7842C35.0382 69.4528 31.2508 73.2402 26.5822 73.2402C21.9136 73.2402 18.1262 69.4528 18.1262 64.7842C18.1262 60.1156 21.9136 56.3281 26.5822 56.3281Z"
              fill="#63EBA8"
            ></path>
            <path
              d="M112.812 20.4643C113.83 19.4463 115.067 18.9319 116.517 18.9319C117.968 18.9319 119.205 19.4409 120.223 20.4643C121.241 21.4878 121.75 22.7302 121.75 24.2025C121.75 25.6748 121.241 26.9063 120.223 27.9079C119.205 28.9094 117.968 29.4075 116.517 29.4075C115.067 29.4075 113.83 28.9094 112.812 27.9079C111.794 26.9063 111.28 25.6748 111.28 24.2025C111.28 22.7302 111.789 21.4878 112.812 20.4643Z"
              fill="currentColor"
            ></path>
            <path
              d="M120.868 32.7734H111.986V65.2402H120.868V32.7734Z"
              fill="currentColor"
            ></path>
            <path
              d="M127.332 32.7734H136.215V35.7726C137.315 34.6725 138.634 33.8023 140.167 33.1674C141.699 32.5325 143.401 32.2151 145.284 32.2151C147.654 32.2151 149.865 32.735 151.928 33.7804C153.992 34.8203 155.644 36.32 156.887 38.2848C158.135 40.2442 158.759 42.5101 158.759 45.0825V65.2347H149.876V47.3484C149.876 46.002 149.591 44.8088 149.017 43.7635C148.442 42.7236 147.67 41.919 146.69 41.3443C145.711 40.7751 144.627 40.485 143.445 40.485C142.016 40.485 140.752 40.8408 139.647 41.5578C138.546 42.2748 137.693 43.2326 137.102 44.4367C136.51 45.6408 136.215 46.9762 136.215 48.4485V65.2347H127.332V32.7679V32.7734Z"
              fill="currentColor"
            ></path>
            <path
              d="M101.964 26.7693H105.522V18.9426H102.271C97.5638 18.9426 94.0118 20.0756 91.6146 22.3469C89.2173 24.6183 88.0187 27.8529 88.0187 32.0509V32.8171H82.7974V40.4741H88.0023L88.1829 65.2456H96.9454L96.8906 40.4741H105.527V32.8171H96.9946C96.9946 30.4855 97.5255 28.8491 98.5873 27.9186C99.3262 27.2673 100.465 26.8897 101.975 26.7747"
              fill="currentColor"
            ></path>
            <path
              d="M87.8765 78.102C87.8765 75.0534 90.1204 72.9736 92.9774 72.9736C94.7288 72.9736 95.9493 73.822 96.7374 74.9385L95.6976 75.5187C95.1338 74.6867 94.1049 74.0792 92.9774 74.0792C90.8046 74.0792 89.1572 75.7431 89.1572 78.1075C89.1572 80.4719 90.8046 82.1357 92.9774 82.1357C94.1049 82.1357 95.1338 81.5391 95.6976 80.6963L96.7539 81.2764C95.922 82.4039 94.7343 83.2358 92.9774 83.2358C90.1259 83.2358 87.8765 81.156 87.8765 78.1075V78.102Z"
              fill="currentColor"
            ></path>
            <path
              d="M98.3684 78.102C98.3684 75.1738 100.344 72.9736 103.289 72.9736C106.233 72.9736 108.209 75.1738 108.209 78.102C108.209 81.0301 106.217 83.2303 103.289 83.2303C100.361 83.2303 98.3684 81.0301 98.3684 78.102ZM106.928 78.102C106.928 75.7814 105.5 74.0737 103.289 74.0737C101.078 74.0737 99.6491 75.7814 99.6491 78.102C99.6491 80.4226 101.061 82.1302 103.289 82.1302C105.516 82.1302 106.928 80.4062 106.928 78.102Z"
              fill="currentColor"
            ></path>
            <path
              d="M117.601 83.0552L111.821 75.1465V83.0552H110.59V73.1433H111.854L117.563 80.8878V73.1433H118.794V83.0552H117.606H117.601Z"
              fill="currentColor"
            ></path>
            <path
              d="M128.575 83.0552L122.795 75.1465V83.0552H121.563V73.1433H122.828L128.536 80.8878V73.1433H129.768V83.0552H128.58H128.575Z"
              fill="currentColor"
            ></path>
            <path
              d="M132.526 83.0552V73.1433H139.023V74.2434H133.763V77.4397H138.919V78.5399H133.763V81.9606H139.023V83.0607H132.526V83.0552Z"
              fill="currentColor"
            ></path>
            <path
              d="M141.026 78.102C141.026 75.0534 143.27 72.9736 146.127 72.9736C147.878 72.9736 149.099 73.822 149.887 74.9385L148.847 75.5187C148.283 74.6867 147.254 74.0792 146.127 74.0792C143.954 74.0792 142.307 75.7431 142.307 78.1075C142.307 80.4719 143.954 82.1357 146.127 82.1357C147.254 82.1357 148.283 81.5391 148.847 80.6963L149.903 81.2764C149.071 82.4039 147.884 83.2358 146.127 83.2358C143.275 83.2358 141.026 81.156 141.026 78.1075V78.102Z"
              fill="currentColor"
            ></path>
            <path
              d="M154.375 83.0551V74.2378H151.239V73.1377H158.759V74.2378H155.606V83.0551H154.375Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <span
          className="flex w-max items-center justify-center uppercase font-semibold border-[1.5px] gap-1 rounded-lg dark:bg-secondary-300 border-tertiary-50 dark:border-secondary-200 h-6 text-sm p-2 bg-white text-black dark:text-white mr-2 max-w-[150px] truncate"
          title="Current tenant: false"
        >
          Fin Kenya
        </span>
        <span className="flex w-max items-center justify-center uppercase font-semibold border-[1.5px] gap-1 rounded-lg text-white bg-warning border-warning h-6 text-sm p-2">
          dev
        </span>
      </div>
      <div className='ml-9'>
        <BreadCrumbs
          breadCrumbs={[
            {
              name: 'Home',
              url: '/',
            },
            {
              name: 'Upload policy',
              url: '/insurance',
            },
          ]}
        />
      </div>
      <Container className="h-[calc(100vh-4.3rem)] pt-4 pb-6 overflow-y-auto relative md:px-16">
        <>
          {children}
          <Box className="mt-96">
            <Text color="muted" fontSize="md">
              &copy; {new Date().getFullYear()} &bull; Powered by Fin Connect
              &bull; All Rights Reserved.
            </Text>
          </Box>
        </>
      </Container>
    </div>
  );
};
