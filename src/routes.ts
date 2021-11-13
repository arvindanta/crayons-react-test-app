import App from './App'
import About from './About'
import Contact from './Contact'


const routes = [
  {
    title: 'App',
    path: '/',
    exact: true,
    component: App
  },
 
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact
  }
]

export default routes