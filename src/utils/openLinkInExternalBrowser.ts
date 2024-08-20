import { urlWithoutProtocol } from './urlWithoutProtocol';

export enum BrowserType {
  CHROME = 'googlechrome://',
  SAFARI = 'x-safari-',
  FIREFOX = 'firefox://open-url?url=',
  OPERA = 'opera-',
  KAKAO = 'kakaotalk://web/openExternal?url=',
}

export const openLinkInExternalBrowser = (
  url: string,
  browserType: BrowserType
) => {
  const redirectUrl = browserType + url;
  const link = document.createElement('a');
  link.id = 'open_in_external_browser_link';
  link.href = redirectUrl;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  return redirectUrl;
};

export const openLinkInChrome = (url: string) => {
  return openLinkInExternalBrowser(urlWithoutProtocol(url), BrowserType.CHROME);
};

export const openLinkInSafari = (url: string) => {
  return openLinkInExternalBrowser(url, BrowserType.SAFARI);
};

export const openLinkInFirefox = (url: string) => {
  return openLinkInExternalBrowser(url, BrowserType.FIREFOX);
};

export const openLinkInOpera = (url: string) => {
  return openLinkInExternalBrowser(url, BrowserType.OPERA);
};

export const openLinkInKakaoExternal = (url: string) => {
  return openLinkInExternalBrowser(url, BrowserType.KAKAO);
};

export const openLinkInSupportedBrowsers = (url: string) => {
  openLinkInFirefox(url);
  openLinkInSafari(url);
  openLinkInChrome(url);
  openLinkInOpera(url);
};
