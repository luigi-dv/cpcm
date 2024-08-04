import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-react';

import { getClients } from '@/services/clients';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/common/EmptyStates';
import { TablePagination } from '@/components/common/TablePagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ClientsPage = async () => {
  const clients = await getClients();
  return (
    <main className='h-full grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <TabsList>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='active'>Active</TabsTrigger>
            <TabsTrigger value='draft'>Draft</TabsTrigger>
            <TabsTrigger value='archived' className='hidden sm:flex'>
              Archived
            </TabsTrigger>
          </TabsList>
          <div className='ml-auto flex items-center gap-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm' className='h-7 gap-1'>
                  <ListFilter className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size='sm' variant='outline' className='h-7 gap-1'>
              <File className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Export</span>
            </Button>
            <Button size='sm' className='h-7 gap-1'>
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Client</span>
            </Button>
          </div>
        </div>
        <TabsContent value='all'>
          <Card>
            <CardHeader>
              <CardTitle>Clients</CardTitle>
              <CardDescription>
                Manage your clients and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {clients.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className='hidden md:table-cell'>Created at</TableHead>
                      <TableHead>
                        <span className='sr-only'>Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className='font-medium'>{client.name}</TableCell>
                        <TableCell className='hidden md:table-cell'>
                          {new Date(client.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button aria-haspopup='true' size='icon' variant='ghost'>
                                <MoreHorizontal className='h-4 w-4' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <EmptyState
                  title={'No clients found'}
                  description={'Create a new client to get started.'}
                />
              )}
            </CardContent>
            <CardFooter>
              {clients.length > 0 && (
                <TablePagination
                  currentPage={1}
                  onPageChange={() => {}}
                  rowsPerPage={10}
                  totalRows={1}
                />
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ClientsPage;