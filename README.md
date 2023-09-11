# nomadcoders-vanilla-js
NomadCoders : 바닐라 JS로 크롬 앱 만들기

[Log-In Part]

1. const 선언 및 할당
2. funtion 정의
3. funtion 실행문 호출

1-1. 필요한 const와 필요한 이유
1) loginForm : HTML의 #login-form을 호출
2) loginInput : HTML의 #login-form의 input 태그를 호출
3) greeting : HTML의 로그인 이후 보여질 인사가 입력된 h1 태그 호출
4) HIDDEN_CLASSNAME : js 안에서 반복되는 "hidden"을 대체하기 위한 변수
5) USERNAME_KEY : js 안에서 반복되는 "username"을 대체하기 위한 변수

2-1. function 정의
1) function onloginButton() : 2)function onloginSubmit(event) 배우기 전 사용

ver.1)
```javaScript
      function onloginButton(){
        console.dir(loginInput.value);
        console.log("로그인버튼 클릭했음");
      }
```

ver.2)
```javaScript
      function onloginButton() {
        const username = loginInput.value;
        if (username === "") {
          alert("이름을 입력해주세요.");
        } else if (username.length > 15) {
          alert("이름이 너무 깁니다.");
        }
      }
```
2)function onloginSubmit(event) : 1)을 HTMl,CSS,JS를 활용해 디벨롭한 버전  
      event.preventDefault(); : 이 함수는 event의 원래 기능을 막는다.
      즉, 브라우저의 기본 동작을 막음.
      브라우저의 기본 동작 = 페이지 새로고침

  ```javaScript
      function onloginSubmit(event){
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME)
        paintGreetings(username)
      }
```
3)function paintGreetings(username)
  ```javaScript
      function paintGreetings(username){
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME)
      }
```
3-1. function 실행 : if문 사용 및 사용자 입력값 상수선언 및 저장 활용
```javaScript
  const savedUsername = localStorage.getItem(USERNAME_KEY)
  if(savedUsername===null){
    //form 화면 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onloginSubmit);
  }else{
    //greeting 화면 보여주기
    paintGreetings(savedUsername);
  }
```
