import Login from './views/Login.vue'
import index from './layout/index.vue'
import register from './views/register/Index.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        hidden: true
    },
    {
        path: '/',
        name: 'home',
        redirect: '/home/',
        component: index,
        hidden: true,
        children: [
          {
            path: 'home',
            name: '首页',
            hidden: true,
            component: () => import('./views/Home.vue')
          },
          {
              path: 'blog/:id',
              name: '笔记详情',
              hidden: true,
              component: () => import('./views/blog/Detail.vue')
          }
        ]
    },
    {
        path: '/register/:name',
        component: register,
        name: '登记信息',
        hidden: true,
    },
    // {
    //     path: '/stock',
    //     component: index,
    //     name: '股票',
    //     hidden: false 
    // },
    // {
    //     path: '/proce',
    //     component: index,
    //     name: '程序',
    //     hidden: false 
    // },
];

export default routes;