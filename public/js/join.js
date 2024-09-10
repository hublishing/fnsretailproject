// CDN을 통해 aws-amplify를 불러오기
import Amplify, { Auth } from 'https://cdn.jsdelivr.net/npm/aws-amplify@4.3.11/dist/aws-amplify.min.js';

// aws-exports 설정 파일 불러오기
import awsmobile from './aws-exports.js';

Amplify.configure(awsmobile);

// 회원가입 함수
const signUp = async (event) => {
  event.preventDefault();  // 폼 제출 기본 동작 방지

  const email = document.querySelector('input[placeholder="email"]').value;
  const password = document.querySelector('input[placeholder="password"]').value;

  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,  // 필수 속성: 이메일
      },
    });
    console.log('회원가입 성공:', user);
    alert('회원가입이 완료되었습니다. 이메일 인증을 확인하세요.');
    window.location.href = '/index.html'; // 회원가입 후 로그인 페이지로 이동
  } catch (error) {
    console.error('회원가입 실패:', error);
    document.querySelector('.errortext').textContent = '회원가입 실패: ' + error.message;
  }
};

document.querySelector('form').addEventListener('submit', signUp);
