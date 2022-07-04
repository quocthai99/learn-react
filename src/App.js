import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react';
// import AdminTemplate from "./container/AdminTemplate";
// import HomeTemplate from "./container/HomeTemplate";
// import AboutPage from './container/HomeTemplate/AboutPage';
// import HomePage from './container/HomeTemplate/HomePage';
// import ListMoviePage from './container/HomeTemplate/ListMoviePage';
// import DashboardPage from './container/AdminTemplate/DashboardPage';
// import AddUserPage from './container/AdminTemplate/AddUserPage'
// import AddMoviePage from './container/AdminTemplate/AddMoviePage'
// import HookPage from './container/HomeTemplate/Hooks';
// import HocPage from './container/HomeTemplate/HocPage';
// import DetailMovie from './container/HomeTemplate/DetailMovie';
// import AuthPage from './container/AdminTemplate/AuthPage';

import { renderRoutes } from './routes/index'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={<HomeTemplate />}>
          <Route path='' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='list-movie' element={<ListMoviePage />} />
          <Route path='hook' element={<HookPage />} />
          <Route path='hoc' element={<HocPage />} />
          <Route path='detail/:id' element={<DetailMovie />} />
        </Route> */}

          {/* <Route path='admin' element={<AdminTemplate />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='user' element={<AddUserPage />} />
          <Route path='movie' element={<AddMoviePage />} />
        </Route>

        <Route path='auth' element={<AuthPage />} /> */}

          {renderRoutes()}

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
