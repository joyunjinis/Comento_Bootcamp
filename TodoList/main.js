const TodoApp = (() => {
  const todos = [];

  // 날짜 업데이트
  function updateDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()];
    const day = date.getDate();
    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      date.getDay()
    ];
    const dateElement = document.getElementById("date");
    dateElement.innerText = `${weekDay} ${month} ${day} ${year}`;
  }

  // 할 일 추가 기능
  function addTodo() {
    const input = document.getElementById("newTodo");
    const content = input.value.trim();
    if (content) {
      const newTodo = {
        // [수정] id 추가 : 삭제 기능에서 고유 식별자로 사용
        id: Date.now(),
        isDone: false,
        content: content,
      };
      todos.push(newTodo);

      const listContainer = document.getElementById("mockData");
      const todoElement = document.createElement("div");
      todoElement.className = "list-item";

      // [수정] innerHTML → createElement + textContent로 변경 : XSS 공격 방지
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "todo";
      checkbox.value = newTodo.id;

      const label = document.createElement("label");
      label.textContent = newTodo.content;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", () => deleteTodo(newTodo.id));

      todoElement.appendChild(checkbox);
      todoElement.appendChild(label);
      todoElement.appendChild(deleteBtn);
      listContainer.appendChild(todoElement);

      // 입력 필드 초기화
      input.value = "";
    }
  }

  // 할 일 삭제 기능
  function deleteTodo(id) {
    // [수정] 예외처리 추가 : 일치하는 요소가 없을 경우 null 참조 오류 방지
    const inputEl = document.querySelector(`input[value="${id}"]`);
    if (!inputEl || !inputEl.parentElement) return;
    inputEl.parentElement.remove();
  }

  // 초기화
  function init() {
    // [수정] 이벤트 등록을 init 함수로 통합
    document.getElementById("addButton").addEventListener("click", addTodo);
    document.getElementById("newTodo").addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTodo();
    });
    updateDate();
    setInterval(updateDate, 1000);
  }

  return { init };
})();

// [수정] 전역 스코프 남용 제거 : IIFE로 모듈화하여 스코프 오염 방지
document.addEventListener("DOMContentLoaded", TodoApp.init);
