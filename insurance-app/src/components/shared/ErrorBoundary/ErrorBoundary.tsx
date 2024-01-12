import { Box, Flex, Text } from 'fin-ui';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error.message.includes('jwt')) {
      window.location.href = '/login';
      return;
    }
    console.error('Uncaught error:', error.message);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box className="h-screen flex flex-col justify-center items-center">
          <Box className="flex items-center gap-3 mb-6">
            <Text fontWeight="bold" className="text-5xl border-r pr-3">
              Session Expired
            </Text>
            <Text>Your session expired or there was an error.</Text>
          </Box>
          <Flex gap={3} align="center">
            <a
              href="/"
              className="dark:text-white font-semibold text-lg underline hover:text-primary transition"
            >
              Back to dashboard
            </a>
            <button
              onClick={() => window.location.reload()}
              className="dark:text-white font-semibold text-lg underline hover:text-primary transition"
            >
              Reload
            </button>
          </Flex>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
