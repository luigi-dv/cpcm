"use client";

import React from "react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};
