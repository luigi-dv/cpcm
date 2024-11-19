'use client';

import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { LeadRouteFormValues } from '@/types/forms/leads';
import { LeadRouteForm } from '@/components/forms/lead/LeadRouteForm';
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
        <LeadRouteForm form={routeForm} />
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
