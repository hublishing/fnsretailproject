import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import { Auth } from 'aws-amplify';


// 로그인 함수
const login = async (event) => {
  event.preventDefault();  // 폼 제출 기본 동작 방지

  const email = document.querySelector('input[placeholder="email"]').value;
  const password = document.querySelector('input[placeholder="password"]').value;

  try {
    const user = await Auth.signIn(email, password);
    console.log('로그인 성공:', user);
    window.location.href = '/dashboard.html';  // 로그인 성공 후 페이지 이동
  } catch (error) {
    console.error('로그인 실패:', error);
    document.querySelector('.errortext').textContent = '로그인 실패: ' + error.message;
  }
};

document.querySelector('form').addEventListener('submit', login);
