import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import React from 'react';

// styles
import './App.css';

// components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Login from './pages/login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/404/NotFound';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                index
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="/project/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </>
      )}
    </div>
  );
}

export default App;
