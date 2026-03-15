// 아이디 데이터 저장
const storedUserData = localStorage.getItem("userData");
const userData = storedUserData ? JSON.parse(storedUserData) : {};

// [수정] 정규표현식 가독성을 위한 규칙 배열로 분리
const passwordRules = [
  { regex: /[a-z]/, msg: "소문자가 포함되어야 합니다." },
  { regex: /[A-Z]/, msg: "대문자가 포함되어야 합니다." },
  { regex: /\d/, msg: "숫자가 포함되어야 합니다." },
  { regex: /[!@#$%^&*]/, msg: "특수문자가 포함되어야 합니다." },
  { regex: /.{8,}/, msg: "비밀번호는 최소 8자 이상이어야 합니다." },
];

// [수정] validatePassword : 정규표현식 배열 기반 검증으로 변경
function validatePassword(password) {
  return passwordRules.every((rule) => rule.regex.test(password));
}

// [수정] signup을 validateForm, saveUser로 기능 분할
// 입력값 유효성 검사
function validateForm(username, password) {
  if (!username) {
    alert("아이디를 입력해주세요.");
    return false;
  }
  if (userData[username]) {
    alert("이미 존재하는 아이디입니다.");
    return false;
  }
  const failedRule = passwordRules.find((rule) => !rule.regex.test(password));
  if (failedRule) {
    alert(failedRule.msg);
    return false;
  }
  return true;
}

// 유저 데이터 저장 및 페이지 이동
function saveUser(username, password) {
  userData[username] = { password: password };
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("성공적으로 회원가입이 되었습니다.");
  window.location.href = "finish.html";
}

// 회원가입 실행
function signup() {
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("password");

  if (!usernameEl || !passwordEl) {
    alert("입력 요소를 찾을 수 없습니다.");
    return; // [수정] void 반환 : return undefined가 아닌 흐름 제어용 return
  }

  const username = usernameEl.value.trim();
  const password = passwordEl.value;

  if (!validateForm(username, password)) return;
  saveUser(username, password);
}

// [수정] 저장된 아이디 데이터 출력 : 로컬스토리지에서 데이터를 콘솔에 출력
function showUserData() {
  console.log(userData);
}

// [수정] 이벤트 등록 방식 변경 : onclick → addEventListener로 변경 (중복 핸들링, 제거 가능)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signup-btn")?.addEventListener("click", signup);
});
