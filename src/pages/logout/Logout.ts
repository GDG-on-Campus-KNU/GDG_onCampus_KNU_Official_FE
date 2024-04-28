import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('accesstoken');
  localStorage.removeItem('expiration');
  return redirect('/gdscknu');
  // 쿠키삭제 추가해야함
}
