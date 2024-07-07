"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/routes";
import React from "react";
import { CircleX } from "lucide-react";

const AuthenticationErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const handleReturnToHome = (e: React.SyntheticEvent) => {
    router.replace(HOME_ROUTE);
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hmm, something went wrong.</CardTitle>
        <CardDescription>
          {" "}
          {error || "An error occurred while trying to authenticate."}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={handleReturnToHome}>
          Go back to home
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthenticationErrorPage;
