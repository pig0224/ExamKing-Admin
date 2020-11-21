import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 管理员
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/list',
    name: 'Admin',
    meta: {
      roles: ['admin'],
      title: '管理员管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'AdminList',
        component: () => import('@/views/admin/list.vue'),
        meta: { title: '管理员列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'AdminCreate',
        component: () => import('@/views/admin/create.vue'),
        meta: { title: '管理员创建', icon: 'dashboard' }
      },
      {
        path: 'edit',
        name: 'AdminEdit',
        component: () => import('@/views/admin/edit.vue'),
        hidden: true,
        meta: { title: '编辑管理员', icon: 'dashboard' }
      }, {
        path: 'change-pass',
        name: 'AdminChangePass',
        component: () => import('@/views/admin/changePass.vue'),
        hidden: true,
        meta: { title: '修改密码', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/dept',
    component: Layout,
    redirect: '/dept/list',
    name: 'Dept',
    meta: {
      roles: ['admin'],
      title: '系别管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'DeptList',
        component: () => import('@/views/dept/list.vue'),
        meta: { title: '系别列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'DeptCreate',
        component: () => import('@/views/dept/create.vue'),
        meta: { title: '系别创建', icon: 'dashboard' }
      }, {
        path: 'edit',
        name: 'DeptEdit',
        component: () => import('@/views/dept/edit.vue'),
        hidden: true,
        meta: { title: '编辑系别', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/classes',
    component: Layout,
    redirect: '/classes/list',
    name: 'Classes',
    meta: {
      roles: ['admin'],
      title: '班级管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'ClassesList',
        component: () => import('@/views/classes/list.vue'),
        meta: { title: '班级列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'ClassesCreate',
        component: () => import('@/views/classes/create.vue'),
        meta: { title: '班级创建', icon: 'dashboard' }
      }, {
        path: 'edit',
        name: 'ClassesEdit',
        component: () => import('@/views/classes/edit.vue'),
        hidden: true,
        meta: { title: '编辑班级', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/list',
    name: 'Teacher',
    meta: {
      roles: ['admin'],
      title: '教师管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'TeacherList',
        component: () => import('@/views/teacher/list.vue'),
        meta: { title: '教师列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'TeacherCreate',
        component: () => import('@/views/teacher/create.vue'),
        meta: { title: '教师创建', icon: 'dashboard' }
      }, {
        path: 'edit',
        name: 'TeacherEdit',
        component: () => import('@/views/teacher/edit.vue'),
        hidden: true,
        meta: { title: '编辑教师', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/list',
    name: 'Course',
    meta: {
      roles: ['admin'],
      title: '课程管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'CourseList',
        component: () => import('@/views/course/list.vue'),
        meta: { title: '课程列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'CourseCreate',
        component: () => import('@/views/course/create.vue'),
        meta: { title: '课程创建', icon: 'dashboard' }
      }, {
        path: 'edit',
        name: 'CourseEdit',
        component: () => import('@/views/course/edit.vue'),
        hidden: true,
        meta: { title: '编辑课程', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/student',
    component: Layout,
    redirect: '/student/list',
    name: 'Student',
    meta: {
      roles: ['admin'],
      title: '学生管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'list',
        name: 'StudentList',
        component: () => import('@/views/student/list.vue'),
        meta: { title: '学生列表', icon: 'dashboard' }
      },
      {
        path: 'create',
        name: 'StudentCreate',
        component: () => import('@/views/student/create.vue'),
        meta: { title: '学生创建', icon: 'dashboard' }
      }, {
        path: 'edit',
        name: 'StudentEdit',
        component: () => import('@/views/student/edit.vue'),
        hidden: true,
        meta: { title: '编辑学生', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/chengji',
    component: Layout,
    redirect: '/chengji/record',
    name: 'Chengji',
    meta: {
      roles: ['admin'],
      title: '成绩管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'record',
        name: 'ChengjiRecord',
        component: () => import('@/views/chengji/record.vue'),
        meta: { title: '成绩统计', icon: 'dashboard' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
