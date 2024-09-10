 

onAuthStateChanged(auth, (user) => {
    if (user) {
        const email = user.email;
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = `${email}`;
        }
    } else {
        // 사용자가 로그인하지 않은 경우 로그인 페이지로 리디렉션
        window.location.href = "../index.html";
    }
}); 