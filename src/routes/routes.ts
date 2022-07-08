import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, // para poder enviar un componente normal
    // o una carga lazy
    name: string,
}

// Los componentes que vayamos realizar lazy load, deben estar exportados por defecto
const Lazy1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))
// El comentario /* webpackChunkName: "LazyPage1" */ es para renombrar el chunk(pedazo) que se va a ver al cargar en la ventana network

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2',
    }, 
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3',
    },
]