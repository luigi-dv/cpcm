import React from 'react';

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export interface NavigationBarProps extends React.HTMLAttributes<HTMLElement> {
  dict: any;
}

export interface NavigationTooltipsProps extends React.HTMLAttributes<HTMLElement> {
  dict: any;
}

export interface NavigationUserDropdownProps {
  dict: any;
}

export type EmptyStateProps = EmptyStateWithAction | EmptyStateWithoutAction;

interface EmptyStatePropsBase {
  description: string;
  title: string;
}

interface EmptyStateWithAction extends EmptyStatePropsBase {
  actionRoute: string;
  actionText: string;
  withAction: true;
}

interface EmptyStateWithoutAction extends EmptyStatePropsBase {
  actionRoute?: never;
  actionText?: never;
  withAction?: false;
}

export interface NavigationBreadcrumbProps {
  dict: any;
}

export interface NavigationCommandDialogProps {
  dict: any;
}

export interface NavigationSheetProps {
  dict: any;
}

export interface TablePaginationProps {
  rowsPerPage: number;
  totalRows: number;
  currentPage: number;
}
