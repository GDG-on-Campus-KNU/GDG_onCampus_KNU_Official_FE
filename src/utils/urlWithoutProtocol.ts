export const urlWithoutProtocol = (url: string) => {
  const splittedUrl = url.split('//');
  if (splittedUrl.length === 1) return url;
  return splittedUrl[1];
};
