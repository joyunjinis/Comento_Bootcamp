// 전역변수
let currentInput = ""; // 현재 입력값
let previousInput = ""; // 이전 입력값
let operation = null; // 연산자
let shouldResetScreen = false; // 화면 초기화 여부

// 숫자 입력 처리
function press(num) {
  const input = document.getElementById("numberInput");
  
  if (shouldResetScreen) {
    currentInput = "";
    shouldResetScreen = false;
  }
  
  currentInput += num;
  input.value = currentInput;
}

// 연산자 설정
function setOperation(op) {
  const input = document.getElementById("numberInput");
  
  if (currentInput === "" && previousInput === "") return;
  
  if (currentInput === "") {
    operation = op;
    return;
  }
  
  if (previousInput !== "" && currentInput !== "") {
    calculate();
  }
  
  operation = op;
  previousInput = currentInput;
  currentInput = "";
  shouldResetScreen = true;
}

// 계산 실행
function calculate() {
  const input = document.getElementById("numberInput");
  
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
  input.value = currentInput;
  shouldResetScreen = true;
}

// 초기화
function ce() {
  currentInput = "";
  previousInput = "";
  operation = null;
  shouldResetScreen = false;
  const input = document.getElementById("numberInput");
  input.value = "";
}

// 삭제
function del() {
  const input = document.getElementById("numberInput");
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
  }
}