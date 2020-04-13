import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Login',
    url: '/login',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Register',
    url: '/register',
    icon: 'icon-pie-chart'
  },
  {
    title: true,
    name: 'Main',
  },
  {
    name: 'Table',
    url: '/main/table',
    icon: 'icon-pie-chart'
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Error Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Angular Material',
    url: 'http://material.angular.io/components/categories',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
];
