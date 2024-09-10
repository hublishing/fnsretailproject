const loginUser = async (email, password) => {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const data = await cognito.initiateAuth(params).promise();
    console.log('로그인 성공:', data);
    
    // 로그인 성공 후 main.html로 리다이렉트
    window.location.href = 'main.html';
    
    return data;
  } catch (err) {
    console.error('로그인 실패:', err);
    document.querySelector('.errortext').textContent = '로그인 실패: ' + err.message;
  }
};

// 로그인 버튼 클릭 이벤트 핸들러
document.getElementById('login-button').addEventListener('click', (event) => {
  event.preventDefault(); // 폼 기본 제출 방지
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginUser(email, password);
});
