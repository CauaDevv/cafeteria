import { createBrowserRouter, Link } from 'react-router-dom'
import { App } from './App'
import { Home } from './pages/Home'
import { RoutePage } from './pages/RoutePage'
import { RoastDetailPage } from './pages/RoastDetail'
import { uiText } from './data/siteContent'

export const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'torras', element: <RoutePage page="roasts" /> },
    { path: 'torras/:slug', element: <RoastDetailPage /> },
    { path: 'cardapio', element: <RoutePage page="menu" /> },
    { path: 'nossa-historia', element: <RoutePage page="story" /> },
    { path: 'unidades', element: <RoutePage page="locations" /> },
    { path: 'clube', element: <RoutePage page="club" /> },
    { path: 'contato', element: <RoutePage page="contact" /> },
    { path: '*', element: <main className="not-found" id="conteudo"><span>{uiText.notFoundEyebrow}</span><h1>{uiText.notFoundTitle}</h1><Link className="button button--primary" to="/">{uiText.notFoundHome}</Link></main> },
  ] },
])
