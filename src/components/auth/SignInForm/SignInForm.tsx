"use client";

import {
  signInAction,
  signInWithGoogleAction,
  signInWithLinkedInAction,
} from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useSignInForm } from "@/components/auth/SignInForm/hooks/useSignInForm";
import { Icons } from "@/components/icons";
interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A form that allows users to sign in with their email address with a Magic link.
 */
export const SignInForm = (props: SignInFormProps) => {
  const {
    isLoading,
    changeLoadingState,
    isGoogleLoading,
    changeGoogleLoadingState,
    isLinkedInLoading,
    changeLinkedInLoadingState,
    email,
    handleEmailChange,
    validationMessage,
  } = useSignInForm();

  /**
   * Sign in with email handler.
   */
  const onSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeLoadingState(true);
    const formData = new FormData() as FormData;
    formData.append("email", email);
    signInAction(formData).finally(() => {
      changeLoadingState(false);
    });
  };

  /**
   * Sign in with Google Handler.
   */
  const onGoogleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeGoogleLoadingState(true);
    signInWithGoogleAction().finally(() => {
      changeGoogleLoadingState(false);
    });
  };

  /**
   * Sign in with LinkedIn Handler.
   */
  const onLinkedInSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeLinkedInLoadingState(true);
    signInWithLinkedInAction().finally(() => {
      changeLinkedInLoadingState(false);
    });
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={onGoogleSubmit}>
        <Button
          className="w-full"
          variant="secondary"
          type="submit"
          disabled={isLoading || isGoogleLoading || isLinkedInLoading}
        >
          {isGoogleLoading && (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          )}
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </form>
      <form onSubmit={onLinkedInSubmit}>
        <Button
          className="w-full"
          variant="secondary"
          type="submit"
          disabled={isLoading}
        >
          {isLinkedInLoading && (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          )}
          <Icons.linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {" "}
            Or continue with{" "}
          </span>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={handleEmailChange}
              disabled={isLoading || isGoogleLoading || isLinkedInLoading}
            />
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
