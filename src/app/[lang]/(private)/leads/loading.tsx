import { LoadingText } from '@/components/common/LoadingText';

export default function Loading() {
  return (
    <div className={'flex justify-center items-center h-screen'}>
      <LoadingText text='Getting Leads' />
    </div>
  );
}
