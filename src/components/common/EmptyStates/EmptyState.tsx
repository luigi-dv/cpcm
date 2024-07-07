"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStatePropsBase {
  title: string;
  description: string;
}

interface EmptyStateWithAction extends EmptyStatePropsBase {
  withAction: true;
  actionText: string;
  actionRoute: string;
}

interface EmptyStateWithoutAction extends EmptyStatePropsBase {
  withAction?: false;
  actionText?: never;
  actionRoute?: never;
}

type EmptyStateProps = EmptyStateWithAction | EmptyStateWithoutAction;

export const EmptyState = (props: EmptyStateProps) => {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm py-8">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{props.title}</h3>
        <p className="text-sm text-muted-foreground">{props.description}</p>
        {props.withAction && (
          <Button className="mt-4" asChild>
            <Link href={props.actionRoute}> {props.actionText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
