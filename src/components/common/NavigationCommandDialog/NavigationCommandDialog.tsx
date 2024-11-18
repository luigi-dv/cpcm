'use client';

import React, { useEffect, useState } from 'react';

import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NavigationCommandDialogProps } from '@/types/components/common';
import {
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
        <CommandInput placeholder={dict.search.searchPlaceholder} />
        <CommandList>
          <CommandEmpty>{dict.search.noResultsFound}</CommandEmpty>
          <CommandGroup heading={dict.search.searchSuggestions.searchSuggestions}>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={dict.settings.settings}>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>{dict.settings.account}</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>{dict.settings.notifications}</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
