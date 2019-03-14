
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/toolbar2.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
    ]
  },
  {
    path: '/payroll',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/payroll.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
