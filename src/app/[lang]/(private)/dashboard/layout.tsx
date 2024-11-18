import * as React from 'react';
import { ReactNode } from 'react';

const DashboardLayout = (props: { children: ReactNode; transactions: ReactNode }) => {
  return <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>{props.children}</main>;
};

export default DashboardLayout;
