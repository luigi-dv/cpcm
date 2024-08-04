import { Handshake, Home, Hospital, Package, Users2 } from 'lucide-react';
import {
  CLIENTS_ROUTE,
  CONTACTS_ROUTE,
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
    name: 'contacts',
    icon: Users2,
    route: CONTACTS_ROUTE,
  },
  {
    name: 'prospects',
    icon: Handshake,
    route: PROSPECTS_ROUTE,
  },
  {
    name: 'products',
    icon: Package,
    route: PRODUCTS_ROUTE,
  },
  {
    name: 'clients',
    icon: Hospital,
    route: CLIENTS_ROUTE,
  },
];
