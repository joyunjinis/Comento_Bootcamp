# 4차 업무
## 신입사원 프로젝트


---

## 📌 업무 요청서 

최종 프로젝트를 진행해봅시다. 마지막 OJT과제인 만큼 힘내서 끝까지 완수합시다.  
이번 프로젝트는 최종프로젝트 이므로 팀장님께 보고를 할 예정입니다.   
본인의 프로젝트를 충분히 설명할 수 있는 문서까지 같이 만들어주세요.  
1. 아래 기능이 들어간 to do list를 만들어주세요.  
 FR1) 일정을 추가 할 수 있어야 합니다.  
 FR2) 일정을 삭제 할 수 있어야 합니다.    
  * 만약 페이지에 이벤트가 있다면 가능한 이벤트들에 대해 화면과 같이 설명되어야 합니다.   
  * 프로그램을 만들 때는 코드 이외에도 구현한 함수를 각각 설명하고, 프로그램 자체의 동작에 대해 포괄적으로 설명하는 문서를 작성해주세요.  
  * 만약 구현하지 못한 부분이 있다면 해당 부분도 내용에 포함해주세요.  
---



---


## 📅 개발 기간
- 25/04/14 ~ 25/04/18


---


## 👨‍💻 업무 수행 결과 피드백
### todolist
1. html 구조 및 스타일, 스크립트까지 요건에 알맞게 구성됨
2. DOMContentLoaded와 setInterval을 활용한 날짜 갱신 구현 적절
3. 이벤트 바인딩 적절: ketpress 이벤트로 Enter 키 추가 기능 구현은 UX 측면에서도 좋음
4. '오늘은'이라는 부분에는 제목 태그 쓸 필요 없음
   - H1 제목 태그를 도와주는 역할이기 때문에 div 또는 p 태그로 작성하면 됨
5. css 오타
   - border: 1px soild로 수정해야 함
6. <input type="new todo" /> 잘못된 타입, 잘못 작성한듯함
7. innerHTML로 사용자 입력값 렌더링 -> XSS 공격에 매우 취약함 (아래와 같이 수정 필요)
   - const label = document.createElement("label");
     label.textContent = newTodo.content
9. deleteTodo()가 예외처리 없음
   - 일치하는 input[value="$(id)"]가 없으면 .parentElement에서 null 참조 오류 발생
10. 전역 스코프 남용
    - addTodo, deleteTodo, updateDate 모두 전역에 선언되어 있음
    - 스코프 오염 문제 및 테스트, 유지보수 어려움
11. [QA] addTodo()에 대한 설명 부족

---

## 🛠️ 사용 기술
- HTML, CSS, Javascript


---

## 🔗 배포 링크
https://comento-bootcamp-w15l.vercel.app

---


## 📂 프로젝트 구조
```
📂 TodoList/
├── 📁 index.html             # 투두리스트 인터페이스
├── 📁 main.css              # 투두리스트 스타일
├── 📁 main.js               # 투두리스트 이벤트
```
---

## 📷 투두리스트 메인 화면 & 삭제한 화면
<img width="1027" height="723" alt="Image" src="https://github.com/user-attachments/assets/e2aa01c8-6e40-4889-a5fb-d1212890cb92" />

## 📷 할일 추가한 화면
<img width="1011" height="721" alt="Image" src="https://github.com/user-attachments/assets/0ef26455-3939-4cce-9fa8-f1591837f821" />

---
