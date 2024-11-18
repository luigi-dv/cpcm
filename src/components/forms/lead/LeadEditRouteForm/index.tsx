'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { Lead } from '@prisma/client';
import { mapToLeadSchema } from '@/schemas/leads/mapToLeadSchema';

import { updateLead } from '@/services/leads';
import { LeadRouteFormValues } from '@/types/forms/leads';
import { LeadRouteInputsCard } from '@/components/modules/leads/crud/common/LeadRouteInputsCard';

export const LeadEditRouteForm = ({ lead }: { lead: Lead }) => {
  const form = useForm<LeadRouteFormValues>({
    defaultValues: {
      route: lead.Route,
      province: lead.Province,
      category: lead.Category,
      centerName: lead.CenterName,
    },
  });

  const onSubmit: SubmitHandler<LeadRouteFormValues> = async (data) => {
    const schema = mapToLeadSchema({
      ...lead,
      Route: data.route,
      Province: data.province,
      Category: data.category,
      CenterName: data.centerName,
    });

    try {
      const updatedLead = await updateLead({
        // @ts-ignore
        id: lead['_id']?.['$oid'], // Safely access nested properties
        schema, // Spread schema properties into the object
      });
      toast.success('Lead Route Data Updated', {
        description: dayjs(updatedLead?.UpdatedAt).toString(),
      });
    } catch (e) {
      toast.error('Error', {
        description: 'Failed to update the lead. Please try again.',
      });
    }
  };

  return (
    <div className='col-span-2 md:col-span-1'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <LeadRouteInputsCard routeForm={form} withSaveButton />
      </form>
    </div>
  );
};
