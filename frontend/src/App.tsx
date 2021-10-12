import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global'
import { PhonewordProvider } from './PhonewordsContext';

export function App() {
  return (
    <PhonewordProvider>      
      <Header />
      <Dashboard />
      <GlobalStyle />
    </PhonewordProvider>
  );
}