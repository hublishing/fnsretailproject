Amplify.configure({
    Auth: {
      userPoolId: 'ap-northeast-2_4BBJiRrR9', // 사용자 풀 ID
      userPoolWebClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
      region: 'ap-northeast-2', // 리전
    }
  });
  
  const signUp = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('input[placeholder="email"]').value;
    const password = document.querySelector('input[placeholder="password"]').value;
  
    try {
      const { user } = await Amplify.Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
      console.log('회원가입 성공:', user);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };
  
  document.querySelector('form').addEventListener('submit', signUp);
  