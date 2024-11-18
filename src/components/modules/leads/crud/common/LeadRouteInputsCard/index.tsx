'use client';

import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { LeadRouteFormValues } from '@/types/forms/leads';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const LeadRouteInputsCard = ({
  routeForm,
  withSaveButton,
}: {
  routeForm: UseFormReturn<LeadRouteFormValues, any, undefined>;
  withSaveButton?: boolean;
}) => {
  const {
    register,
    formState: { isDirty, dirtyFields, isSubmitting },
  } = routeForm;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Route</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
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
      </CardContent>
      {withSaveButton && (
        <CardFooter className='w-full flex justify-end'>
          <Button type='submit'>
            {isSubmitting ? (
              <div className='flex'>
                <Loading /> Saving{' '}
              </div>
            ) : (
              'Save'
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
