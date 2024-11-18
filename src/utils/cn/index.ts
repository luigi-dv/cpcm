/**
 * Function to join class names together
 *
 * @param classes The class names to join
 * @returns The joined class names
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
