import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from 'sonner';

import { ErrorBoundary } from '@/components/shared';
import { useTheme } from '@/hooks';
import * as gtag from '../lib/gtag';
import '../styles/global.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    // Listen to route changes for Google Analytics
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      NProgress.done();
    };

    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', () => NProgress.done());
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', null);
      router.events.off('routeChangeError', null);
    };
  }, [router.events]);

  useEffect(() => {
    if (
      (window.console || 'console' in window) &&
      process.env.NODE_ENV === 'production'
    ) {
      console.clear();
      setTimeout(
        console.log.bind(
          console,
          '%c WARNING!!!',
          'color:#FF8F1C; font-size:40px;'
        )
      );
      setTimeout(
        console.log.bind(
          console,
          '%c This browser feature is for developers only. Please do not copy-paste any code or run any scripts here. Your back office account may be compromised and we will disable your account. if you have any issues, contact fin connect support.',
          'color:#dc2626; font-size:16px; font-weight: bold;'
        )
      );
      setTimeout(
        console.log.bind(
          console,
          '%c For more information, http://en.wikipedia.org/wiki/Self-XSS',
          'color:#dc2626; font-size:16px; font-weight: bold;'
        )
      );
    }
  }, []);

  return (
    <SessionProvider session={session} refetchInterval={120}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Toaster
        position="top-right"
        theme={theme as any}
        duration={5000}
        offset={16}
        richColors
        closeButton
        style={{ fontFamily: 'Poppins' }}
        toastOptions={{
          style: {
            fontSize: '1rem',
            borderRadius: '0.8rem',
          },
        }}
      />
    </SessionProvider>
  );
};

export default App;
