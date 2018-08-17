import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '个人中心',
        component: Dashboard
      },
      {
        path: 'user',
        name: '镜像中心',
        component: UserProfile
      },
      {
        path: 'table',
        name: '构建中心',
        component: TableList
      },
      {
        path: 'typography',
        name: '服务中心',
        component: Typography
      },
      {
        path: 'icons',
        name: '监控中心',
        component: Icons
      },
      {
        path: 'maps',
        name: '应用市场',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: '帮助中心',
        component: Notifications
      }
    ]
  }
]

export default routes
