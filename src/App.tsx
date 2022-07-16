import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/globalStyles";
import IPAddressTrackerPage from "./pages/IPAddressTrackerPage";

function App() {
  const client = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <IPAddressTrackerPage />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
