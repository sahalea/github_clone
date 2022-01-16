import React, { useState } from 'react';
import AppHeader from './components/header/AppHeader';
import AppToolbar from './components/toobar/AppToolbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppRouter } from './Router';

const queryClient = new QueryClient();

function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AppHeader />
          <div className="content-style">
            <AppToolbar />
            <AppRouter />
          </div>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
