const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-2' });

const cognito = new AWS.CognitoIdentityServiceProvider();

const signUpUser = async (email, password) => {
  const params = {
    ClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
    ],
  };

  try {
    const data = await cognito.signUp(params).promise();
    console.log('회원가입 성공:', data);
    return data;
  } catch (err) {
    console.error('회원가입 실패:', err);
  }
};

// 사용 예시
signUpUser('example@example.com', 'YourPassword123');
