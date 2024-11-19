'use client';

import React, { useEffect, useState } from 'react';

import { useCommandState } from 'cmdk';
import { useRouter } from 'next/navigation';
import { CREATE_LEAD_ROUTE, LEADS_ROUTE } from '@/routes';
import {
  Calculator,
  Calendar,
  CreditCard,
  PlusIcon,
  Settings,
  Smile,
  User,
  Users2,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogHeader } from '@/components/ui/dialog';
import { NavigationCommandDialogProps } from '@/types/components/common';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';

/**
 * NavigationCommandDialog component
 * @description NavigationCommandDialog component is used to perform navigation commands.
 */
export const NavigationCommandDialog = (props: NavigationCommandDialogProps) => {
  const { dict } = props;
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [pages, setPages] = React.useState<string[]>(['home']);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === 'home';

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(true);
  };

  return (
    <>
      <div className='w-full flex-1 md:w-auto md:flex-none'>
        <Button
          onClick={handleOnClick}
          variant='outline'
          className='inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'
        >
          <span className='inline-flex'>{dict.search.search}</span>
          <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
            <span className='text-xs'>⌘</span>K
          </kbd>
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className='p-4 flex gap-x-2'>
          {pages.map((p, index) => (
            <Badge
              className={cn(activePage == p && 'bg-accent', 'cursor-pointer capitalize')}
              key={p}
              variant='outline'
              onClick={() => {
                const updatedPages = pages.slice(0, index + 1);
                setPages(updatedPages);
              }}
            >
              {p}
            </Badge>
          ))}
        </div>
        <CommandInput
          autoFocus
          onValueChange={(value) => {
            setInputValue(value);
          }}
          placeholder={dict.search.searchPlaceholder}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {activePage === 'home' && (
            <Home searchLeads={() => setPages([...pages, 'leads'])} close={() => setOpen(false)} />
          )}
          {activePage === 'leads' && <Leads />}
        </CommandList>
      </CommandDialog>
    </>
  );
};

function Home({ searchLeads, close }: { searchLeads: Function; close: Function }) {
  const router = useRouter();

  const onCreateLeadSelect = () => {
    close();
    router.push(CREATE_LEAD_ROUTE);
  };
  return (
    <>
      <CommandGroup heading='Leads'>
        <CommandItem
          onClick={() => {
            searchLeads();
          }}
          onSelect={() => {
            searchLeads();
          }}
        >
          <div className='flex gap-4'>
            <Users2 />
            Search Lead
          </div>
        </CommandItem>
        <CommandItem onSelect={onCreateLeadSelect}>
          <div className='flex gap-4'>
            <PlusIcon />
            Create New Lead
          </div>
        </CommandItem>
      </CommandGroup>
    </>
  );
}

function Leads() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <CommandItem onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts=''>
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </CommandItem>
  );
}
