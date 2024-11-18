import { Handshake, Home, Hospital, Package, Users2 } from 'lucide-react';
import {
  CLIENTS_ROUTE,
  LEADS_ROUTE,
  DASHBOARD_ROUTE,
  PRODUCTS_ROUTE,
  PROSPECTS_ROUTE,
} from '@/routes';

/**
 * Navigation items for the authenticated user
 */
export const PRIVATE_NAVIGATION = [
  {
    name: 'dashboard',
    icon: Home,
    route: DASHBOARD_ROUTE,
  },
  {
    name: 'leads',
    icon: Users2,
    route: LEADS_ROUTE,
  },
];
