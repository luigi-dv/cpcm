import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import { Separator } from '@/components/ui/separator';
import { getDictionary } from '@/lib/locale/dictionaries';
import { AccountForm } from '@/components/forms/AccountForm';

/**
 * Settings Page
 */
const SettingsPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>{dict.pages.settings.account.title}</h3>
        <p className='text-sm text-muted-foreground'>{dict.pages.settings.account.description}</p>
      </div>
      <Separator />
      <AccountForm user={data.user} />
    </div>
  );
};

export default SettingsPage;
