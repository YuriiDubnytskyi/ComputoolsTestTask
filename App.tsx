import { Init } from './src/navigation';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NetworkWrapper } from './src/components/NetworkWrapper';
import { ThemeProvider } from './src/components/ThemeContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NetworkWrapper>
          <ToastProvider>
            <Init />
          </ToastProvider>
        </NetworkWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
