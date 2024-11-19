import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LeadRouteFormValues } from '@/types/forms/leads';

export const LeadRouteForm = ({
  form,
}: {
  form: UseFormReturn<LeadRouteFormValues, any, undefined>;
}) => {
  const { register } = form;

  return (
    <>
      <div className='space-y-1'>
        <Label htmlFor='route'>Route</Label>
        <Input id='route' {...register('route')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='province'>Province</Label>
        <Input id='province' {...register('province')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='category'>Category</Label>
        <Input id='category' {...register('category')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='center-name'>Center Name</Label>
        <Input id='center-name' {...register('centerName')} />
      </div>
    </>
  );
};
