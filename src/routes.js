import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import ConnectWalletPanel from './components/ConnectWalletPanel.vue'
import MintPanel from './components/MintPanel.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { 
      title: 'Home' 
    },
    children: [
      {
        path: '/connect',
        component: ConnectWalletPanel
      },
      {
        path: '/mint',
        component: MintPanel
      },
    ]
  },
  { path: '/:path(.*)', component: NotFound },
]
