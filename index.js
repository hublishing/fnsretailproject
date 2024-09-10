const { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand } = require('@aws-sdk/client-cognito-identity-provider');
const express = require('express');
const bodyParser = require('body-parser');

// Cognito 클라이언트 생성
const cognitoClient = new CognitoIdentityProviderClient({ region: 'ap-northeast-2' });

const app = express();
app.use(bodyParser.json());

// 회원가입 처리
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

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
    const command = new SignUpCommand(params);
    const data = await cognitoClient.send(command);
    res.status(200).json({ message: '회원가입 성공', data });
  } catch (err) {
    res.status(400).json({ message: '회원가입 실패', error: err.message });
  }
});

// 로그인 처리
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    const data = await cognitoClient.send(command);
    res.status(200).json({ message: '로그인 성공', data });
  } catch (err) {
    res.status(400).json({ message: '로그인 실패', error: err.message });
  }
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 포트 3000에서 실행 중입니다.');
});
