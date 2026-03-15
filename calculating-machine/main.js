// [수정] DOM 로드 후 초기화를 위해 선언만 전역에
let inputField;

// 전역변수
let currentInput = ""; // 현재 입력값
let previousInput = ""; // 이전 입력값
let operation = null; // 연산자
let displayValue = ""; // 화면에 표시될 값

// [수정] updateDisplay 함수 추가 : DOM 조작을 한 곳에서 관리
function updateDisplay() {
  inputField.value = displayValue;
}

// 숫자 입력 처리
function press(num) {
  currentInput += num;
  displayValue += num;
  // [수정] 직접 DOM 조작 → updateDisplay() 호출로 대체
  updateDisplay();
}

// 연산자 설정
function setOperation(op) {
  if (currentInput === "") return;
  // [수정] 연속 연산 버그 수정 : 이전 입력값이 있으면 먼저 계산 후 결과 저장
  if (previousInput !== "") {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  displayValue += " " + op + " ";
  currentInput = "";
  // [수정] 직접 DOM 조작 → updateDisplay() 호출로 대체
  updateDisplay();
}

// 계산 실행
function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "×":
      result = previous * current;
      break;
    case "÷":
      if (current === 0) {
        alert("0으로 나눌 수 없습니다.");
        return;
      }
      result = previous / current;
      break;
    case "%":
      result = previous % current;
      break;
    default:
      return;
  }
  // 결과 처리
  currentInput = result.toString();
  operation = null;
  previousInput = "";
  displayValue = currentInput;
  // [수정] 직접 DOM 조작 → updateDisplay() 호출로 대체
  updateDisplay();
}

// 초기화
function ce() {
  currentInput = "";
  previousInput = "";
  operation = null;
  displayValue = "";
  // [수정] 직접 DOM 조작 → updateDisplay() 호출로 대체
  updateDisplay();
}

// 삭제
function del() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    // [수정] 직접 DOM 조작 → updateDisplay() 호출로 대체
    updateDisplay();
  }
}

// [수정] DOMContentLoaded 후 inputField 초기화 : HTML 로드 전 DOM 탐색 방지
document.addEventListener("DOMContentLoaded", () => {
  inputField = document.getElementById("numberInput");
});
