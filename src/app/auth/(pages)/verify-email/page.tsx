import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const VerifyRequest = () => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>With a single use Magic Link</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-500'>
          We&apos;ve sent a Magic Link email to your inbox. Please check your email and click the
          link to login your account.
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>
          <Send className='mr-2 h-4 w-4' /> Resend Magic Link
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerifyRequest;
