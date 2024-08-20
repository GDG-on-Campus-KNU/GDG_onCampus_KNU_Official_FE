import { detectUserAgent } from '../detectUserAgent';

describe('UserAgent 에 따라 브라우저 종류를 반환합니다', () => {
  let userAgentSpy: jest.SpyInstance;

  beforeEach(() => {
    userAgentSpy = jest.spyOn(globalThis.navigator, 'userAgent', 'get');
  });

  afterEach(() => {
    (userAgentSpy as jest.SpyInstance).mockRestore();
  });

  test('Instagram 문자열이 포함된 경우 INSTAGRAM 을 반환합니다', () => {
    userAgentSpy.mockReturnValue('Instagram');
    expect(detectUserAgent()).toBe('INSTAGRAM');
  });

  test('kakao 문자열이 포함된 경우 KAKAOTALK 을 반환합니다', () => {
    userAgentSpy.mockReturnValue('kakao');
    expect(detectUserAgent()).toBe('KAKAOTALK');
  });

  test('Kakao 문자열이 포함된 경우 KAKAOTALK 을 반환합니다', () => {
    userAgentSpy.mockReturnValue('Kakao');
    expect(detectUserAgent()).toBe('KAKAOTALK');
  });

  test('KAKAO 문자열이 포함된 경우 KAKAOTALK 을 반환합니다', () => {
    userAgentSpy.mockReturnValue('KAKAO');
    expect(detectUserAgent()).toBe('KAKAOTALK');
  });

  test('KAKAOTALK 문자열이 포함된 경우 KAKAOTALK 을 반환합니다', () => {
    userAgentSpy.mockReturnValue('KAKAOTALK');
    expect(detectUserAgent()).toBe('KAKAOTALK');
  });

  test('이외의 userAgent 의 경우 DEFAULT 를 반환합니다', () => {
    userAgentSpy.mockReturnValue('abc');
    expect(detectUserAgent()).toBe('DEFAULT');
  });
});
