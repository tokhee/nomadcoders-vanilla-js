


//1. 로그인 폼 만들기 (ver_1)
//상수 loginForm만들고 index.html에 있는 div태그 아이디:login-form을 갖고온다
    // const loginForm = document.querySelector("#login-form");

//상수 loginInput만들고 loginForm이란 상수변수에 저장된 div태그 아이디:login-form에서  input 태그를 가져온다
//상수 loginButton만들고 loginForm이란 상수변수에 저장된 div태그 아이디:login-form에서  button 태그를 가져온다
    // const loginInput =loginForm.querySelector("input");
    // const loginButton = loginForm.querySelector("button");

//1. 로그인 폼 만들기 (ver_2) : 위 버전을 더욱 짧은 코드로 만들기
const loginForm =document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
    //const loginButton = document.querySelector("#login-form button");

//6. 유저에게 인사 : 이 인사는 유저이름을 입력, 제출 후 나와야하므로 hidden을 준다
const greeting = document.querySelector("#greeting");
//html에 클래스 hidden이 있음. css에서 클래스 hidden을 display: none으로 설정해둠.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 2.loginButton에 이벤트 연결하기 : 클릭하면 로그인이 되어야 함
// 함수와 이벤트리스너 필요
    // function onloginButton(){
    //   console.dir(loginInput.value);
    //   console.log("로그인버튼 클릭했음");
    // }
    // loginButton.addEventListener("click",onloginButton);

//3.username의 유효성 검사
//상수 loginInput에 사용자가 이름을 입력한 값 =value로 저장됨
//이 value값을 새로운 상수 username에 저장
//이때, username에 아무것도입력되지 않거나, 너무 많이 입력했을 경우 알림을 보내준다.
//이러한 위 기능은 html에도 있음
//예시) input required / maxlength=15

    // function onloginButton() {
    //   const username = loginInput.value;
    //       if (username === "") {
    //         alert("이름을 입력해주세요.");
    //       } else if(username.length>15){
    //         alert("이름이 너무 깁니다.");
    //       }
    //     }
    //loginButton.addEventListener("click",onloginButton);

// 4.HTML input태그의 속성으로 유효성검사 및 로그인버튼(=제출) 만들기
    // 즉,1번의 const loginButton = document.querySelector("#login-form button");
    //   3번의  if (username === "") { alert("이름을 입력해주세요.");}
    //          else if(username.length>15){alert("이름이 너무 깁니다.");}}
    //   loginButton.addEventListener("click",onloginButton);
    //   는 필요가 없어짐.
    //함수이름도 onloginButton()에서 onloginSubmit()으로 변경
//onloginSubmit 함수 정의
function onloginSubmit(event) {
  event.preventDefault();
  //로그인폼(유저이름입력)한 후 다음인사 화면으로 넘어가려면, 로그인폼이 사라져야 한다
  //class="hidden"을 갖고 있는 HIDDEN_CLASSNAME 상수변수를 추가해 숨겨준다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //localStorage 참고 사이트
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  //localStorage.setItem : 로컬스트리지에 아이템 저장
  //localStorage.setItem("저장될 값의 제목=key",저장될 값=value)
  localStorage.setItem(USERNAME_KEY, username);
  //숨긴 다음 greeting 변수에 저장된 html의 h1 id="greeting"을 가져온다
  //그리고 그 안에 텍스트를 추가한다 : `Hello ${username}'
  greeting.innerText = `Hello ${username}`;
  //그리고 greeting 변수에 저장된 html의 h1 id="greeting"에 추가한
  //class="hidden"을 갖고 있는 HIDDEN_CLASSNAME 상수변수를 제거해준다.
  greeting.classList.remove(HIDDEN_CLASSNAME)
  paintGreetings(username)
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername===null){
  //form 화면 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onloginSubmit);
}else{
  //greeting 화면 보여주기
  paintGreetings(savedUsername);
}


//브라우저는 onloginSubmit 함수를 호출하고 함수를 실행한다
//브라우저는 브라우저 안에서 이벤트를 캐치해 onloginSubmit을 실행한다

// Event 인터페이스의 preventDefault() 메서드
// 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자의 기본 동작을 실행하지 않도록 지정
// 예시) function onloginSubmit(event) {
//      event.preventDefault()
//      console.log(event);}

// 5-1. 링크의 기본동작 : 클릭시. 다른 페이지로 이동하는 것
// const link = document.querySelector("a");
// link.addEventListener("click",handleLinkClick)
