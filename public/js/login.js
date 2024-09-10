import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';  // AWS 설정 파일
import awsconfig from './aws-exports';  // AWS 설정 파일

Amplify.configure(awsconfig);


// 로그인 함수
const login = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const user = await Auth.signIn(email, password);
    console.log('로그인 성공:', user);
    // 로그인 후 페이지 이동 등 작업 처리
  } catch (error) {
    console.log('로그인 실패:', error);
    // 오류 메시지 처리
  }
};

document.getElementById('login-button').addEventListener('click', login);
