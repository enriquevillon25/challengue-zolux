import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';


const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}


function App() {
  return (
    <div>
      <AppState>
        <Routes />
      </AppState>
    </div>
  );
}

export default App;
