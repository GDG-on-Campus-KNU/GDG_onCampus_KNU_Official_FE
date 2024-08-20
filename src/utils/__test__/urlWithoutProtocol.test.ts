import { urlWithoutProtocol } from '../urlWithoutProtocol';

describe('URL 에서 http:// https:// 프로토콜을 제외한 문자열을 반환합니다', () => {
  test('http:// 프로토콜을 제외한 문자열을 반환', () => {
    const URL = 'http://test.gdsc.com';
    expect(urlWithoutProtocol(URL)).toBe('test.gdsc.com');
  });

  test('https:// 프로토콜을 제외한 문자열을 반환', () => {
    const URL = 'https://test.gdsc.com';
    expect(urlWithoutProtocol(URL)).toBe('test.gdsc.com');
  });

  test('프로토콜이 존재하지 않는 경우 문자열 그대로 반환', () => {
    const URL = 'test.gdsc.com';
    expect(urlWithoutProtocol(URL)).toBe(URL);
  });
});
