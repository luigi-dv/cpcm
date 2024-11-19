export const removeLanguageSlug = (path: string) => {
  let updatedRoute = path.split('/').slice(2).join('/');
  return '/' + updatedRoute;
};
