// AWS Amplify 설정
console.log("Amplify 설정을 시작합니다.");
Amplify.default.configure({
  Auth: {
    userPoolId: 'ap-northeast-2_4BBJiRrR9', // 사용자 풀 ID
    userPoolWebClientId: '122g2i26b7erslg90ut69s227l', // 클라이언트 ID
    region: 'ap-northeast-2', // 리전
  }
});
console.log("Amplify 설정이 완료되었습니다.");

const signupForm = document.getElementById('signup-form');
const errorText = document.getElementById('errortext');

console.log("이벤트 리스너를 추가합니다.");
// 폼 제출 이벤트 처리
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("폼 제출 이벤트가 발생했습니다.");

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("사용자 입력값:", { email, password });

    try {
        console.log("AWS Cognito 회원가입 요청을 시작합니다.");
        // AWS Cognito 회원가입 요청
        const result = await Amplify.Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email // 사용자 속성 (필요 시 다른 속성도 추가 가능)
            }
        });

        console.log("회원가입 성공:", result);

        // 회원가입 성공 시 메시지 표시 후 로그인 페이지로 이동
        errorText.innerText = '회원가입 성공! 로그인 페이지로 이동합니다.';
        setTimeout(() => {
            console.log("로그인 페이지로 리다이렉션합니다.");
            window.location.href = '/index.html';
        }, 2000);
    } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        // 오류 발생 시 오류 메시지 표시
        errorText.innerText = '오류: ' + error.message;
    }
});
console.log("이벤트 리스너 설정이 완료되었습니다.");