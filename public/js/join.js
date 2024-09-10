// AWS Amplify 설정
Amplify.default.configure({
  Auth: {
    userPoolId: 'ap-northeast-2_4BBJiRrR9', // 사용자 풀 ID
    userPoolWebClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
    region: 'ap-northeast-2', // 리전
  }
});

const signupForm = document.getElementById('signup-form');
const errorText = document.getElementById('errortext');

// 폼 제출 이벤트 처리
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      // AWS Cognito 회원가입 요청
      const result = await Amplify.Auth.signUp({
          username: email,
          password: password,
          attributes: {
              email: email // 사용자 속성 (필요 시 다른 속성도 추가 가능)
          }
      });

      // 회원가입 성공 시 메시지 표시 후 로그인 페이지로 이동
      errorText.innerText = '회원가입 성공! 로그인 페이지로 이동합니다.';
      setTimeout(() => {
          window.location.href = '/index.html';
      }, 2000);
  } catch (error) {
      // 오류 발생 시 오류 메시지 표시
      errorText.innerText = '오류: ' + error.message;
  }
});
