
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes'

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                    {
                        routes.map(({to: routeTo, name}) => (
                            <li key={routeTo}>
                                <NavLink 
                                    to={routeTo} 
                                    className={ ({isActive}) => isActive ? 'nav-active' : '' }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({path: routePath, Component}) => (
                            <Route 
                                key={routePath} 
                                path={routePath} 
                                element={<Component />} 
                            />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
