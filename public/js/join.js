import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports.js';  // AWS 설정 파일

Amplify.configure(awsconfig);

// 회원가입 함수
const signUp = async (event) => {
  event.preventDefault();

  const email = document.querySelector('input[placeholder="email"]').value;
  const password = document.querySelector('input[placeholder="password"]').value;

  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    console.log('회원가입 성공:', user);
    alert('회원가입이 완료되었습니다. 이메일 인증을 확인하세요.');
    window.location.href = '/index.html'; 
  } catch (error) {
    console.error('회원가입 실패:', error);
    document.querySelector('.errortext').textContent = '회원가입 실패: ' + error.message;
  }
};

document.querySelector('form').addEventListener('submit', signUp);
