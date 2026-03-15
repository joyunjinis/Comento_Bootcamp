# 4차 업무
## 신입사원 프로젝트


---

## 📌 업무 요청서 

최종 프로젝트를 진행해봅시다. 마지막 OJT과제인 만큼 힘내서 끝까지 완수합시다.  
이번 프로젝트는 최종프로젝트 이므로 팀장님께 보고를 할 예정입니다.   
본인의 프로젝트를 충분히 설명할 수 있는 문서까지 같이 만들어주세요.  
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

## 🔗 배포 링크
https://comento-bootcamp-573g.vercel.app

---


## 📂 프로젝트 구조
```
📂 signup-project/
├── 📁 main.html             # 회원가입 인터페이스
├── 📁 main.css              # 회원가입 스타일
├── 📁 main.js               # 회원가입 이벤트
├── 📁 finish.html           # 회원가입 완료후 인터페이스
```
---
---

## 📷 회원가입 메인 화면
<img width="1012" height="729" alt="Image" src="https://github.com/user-attachments/assets/4fa8c3ab-e659-4571-b4b0-857fd9c18814" />

## 📷 비밀번호 규칙이 맞지 않았을때의 화면
<img width="1028" height="729" alt="Image" src="https://github.com/user-attachments/assets/c848373d-9cc6-4a0d-8f3e-4cba0bb38826" />

## 📷 정상적으로 회원가입이 완료되었을때의 화면
<img width="1016" height="728" alt="Image" src="https://github.com/user-attachments/assets/dec7626f-e1e3-489c-9fbb-5c7b0dbbf040" />  
<img width="1020" height="728" alt="Image" src="https://github.com/user-attachments/assets/9846a28a-09f2-40ae-92af-be44f0852435" />
