import {
  FavoritesIcon,
  MessengerActiveIcon,
  MessengerIcon,
  MyProfileActiveIcon,
  MyProfileIcon,
  StatisticsActiveIcon,
  StatisticsIcon,
} from '@vibe-samurai/visual-ui-kit'

export const ROUTES = Object.freeze({
  users: '/users',
  stats: '/stats',
  payments: '/payments',
  posts: '/posts',
  auth: '/auth',
})

export const sidebarOptions = [
  {
    icon: MyProfileIcon,
    iconActive: MyProfileActiveIcon,
    title: 'Users list',
    url: ROUTES.users,
  },
  {
    icon: StatisticsIcon,
    iconActive: StatisticsActiveIcon,
    title: 'Statistics',
    url: ROUTES.stats,
  },
  {
    icon: FavoritesIcon,
    iconActive: FavoritesIcon,
    title: 'Payments list',
    url: ROUTES.payments,
  },
  {
    icon: MessengerIcon,
    iconActive: MessengerActiveIcon,
    title: 'Posts list',
    url: ROUTES.posts,
  },
]
