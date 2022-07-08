import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, // para poder enviar un componente normal
    // o una carga lazy
    name: string,
}

// Los componentes que vayamos realizar lazy load, deben estar exportados por defecto
const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))
// El comentario /* webpackChunkName: "LazyPage1" */ es para renombrar el chunk(pedazo) que se va a ver al cargar en la ventana network

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    }, 
]