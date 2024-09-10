// 회원가입 함수
const signUpUser = (email, password) => {
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('회원가입 성공:', data);
      alert('회원가입이 완료되었습니다. 이메일 인증을 확인하세요.');
      window.location.href = '/index.html'; // 회원가입 후 로그인 페이지로 이동
    })
    .catch((error) => {
      console.error('회원가입 실패:', error);
      document.querySelector('.errortext').textContent = '회원가입 실패: ' + error.message;
    });
};

// 폼 제출 이벤트 리스너
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();  // 기본 제출 방지

  // 사용자가 입력한 이메일과 패스워드 값 가져오기
  const email = document.querySelector('input[placeholder="email"]').value;
  const password = document.querySelector('input[placeholder="password"]').value;

  signUpUser(email, password);
});
