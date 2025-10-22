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
2. 회원가입 기능을 간단히 구현해주세요.
 FR1) DB를 구현할 필요는 없고, 회원가입 후 배열에 정보를 저장하면 됩니다.  
 FR2) 아이디 중복 체크가 되어야 합니다.  
 FR3) 비밀번호에 본인만의 규칙을 만들어주세요. 비밀번호 입력 시, 조건에 맞는지 체크하는 기능이 있어야 합니다.  
  * 만약 페이지에 이벤트가 있다면 가능한 이벤트에 대해 화면과 같이 설명돼야 합니다.  
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


### 회원가입 
1. 로직 분리
    - 모든 로직이 전역 범위에 선언되어 있음
    - 함수 분리 및 모듈화를 하지 않아 유지보수성과 재사용성이 낮음
    - ignup() -> validateForm(), sveUser() 등으로 기능 분할
2. JS 이벤트 등록 방식
    - 방식은 중복 핸들링 불가, 제거 불가
    - 정규표현식 가독성을 위해서 분리 필요
3. [QA] signup() 함수 설명: 리턴값 설명이 틀림
4. [QA] showUserData() 설명 누락: 설명이 충분하지 않음
5. [QA] validatePassword(password) 설명 정확성 부족
6. [QA] 동작 설명 추상적
    - 기능들을 수행한다 라고 적는 것보단, 실제 기능을 적어주는 것이 좋음

## 🛠️ 사용 기술
- HTML, CSS, Javascript


---
---


## 📂 프로젝트 구조
```
📂 TodoList/
├── 📁 main.html             # 투두리스트 인터페이스
├── 📁 main.css              # 투두리스트 스타일
├── 📁 main.js               # 투두리스트 이벤트
```

```
📂 signup-project/
├── 📁 main.html             # 회원가입 인터페이스
├── 📁 main.css              # 회원가입 스타일
├── 📁 main.js               # 회원가입 이벤트
├── 📁 finish.html           # 회원가입 완료후 인터페이스
```
---

## 📷 알람시계 시작화면
<img width="1022" height="734" alt="Image" src="https://github.com/user-attachments/assets/f9429c49-8d85-4fde-9df7-5aefa6b48037" />

## 📷 점차 배터리가 줄어드는 화면
<img width="1020" height="724" alt="Image" src="https://github.com/user-attachments/assets/f6951bc8-6a54-4b00-8817-088cba7159fb" />

## 📷 베터리가 0% 되면 시계가 검정색으로 바뀌는 화면
<img width="1020" height="719" alt="Image" src="https://github.com/user-attachments/assets/1c1c9d53-5f09-436c-b2a9-94a280480172" />
