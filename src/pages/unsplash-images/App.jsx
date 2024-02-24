import Gallery from './Gallery.jsx';
import SearchForm from './SearchForm.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './index.css';
import { AppProvider } from './context.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
const App = () => {
    return (
        <AppProvider>
            <QueryClientProvider client={queryClient}>
                <main>
                    <ThemeToggle />
                    <SearchForm />
                    <Gallery />
                </main>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AppProvider>
    );
};
export default App;
