enum RouteNames {
  HOME = 'Home',
  TEAM = 'Team',
  CONTACT = 'Contact',
  EVENTS = 'Events',
}

const Routes = {
  [RouteNames.HOME]: '/',
  [RouteNames.TEAM]: '/team',
  [RouteNames.CONTACT]: '/contact',
  [RouteNames.EVENTS]: '/events',
}

const RoutesInfo = [
  {
    name: RouteNames.HOME,
    url: Routes[RouteNames.HOME],
    newPage: false,
  },
  {
    name: RouteNames.EVENTS,
    url: Routes[RouteNames.EVENTS],
    newPage: false,
  },
  {
    name: RouteNames.TEAM,
    url: Routes[RouteNames.TEAM],
    newPage: true,
  },
  {
    name: RouteNames.CONTACT,
    url: Routes[RouteNames.CONTACT],
    newPage: true,
  },
];

export default RoutesInfo;