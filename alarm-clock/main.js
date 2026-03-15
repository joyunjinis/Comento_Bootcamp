const clockTarget = document.getElementById("clock");

(function initApp() {
  const clockTarget = document.getElementById("clock");
  let batteryLevel = 100;
  let alarmTime = null;

  function updateClock() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDay = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockTarget.innerText = `${month}월 ${day}일 ${weekDay}요일\n${hours}:${minutes}:${seconds}`;
  }

  function setBattery(level) {
    const batteryContainer = document.querySelector(".battery-container");
    batteryContainer.textContent = `배터리 : ${level}%`;
  }

  function startBatteryDrain() {
    setInterval(() => {
      if (batteryLevel > 0) {
        batteryLevel -= 1;
        setBattery(batteryLevel);
      } else {
        clockTarget.style.color = "black";
        clockTarget.style.backgroundColor = "black";
      }
    }, 1000);
  }

  function initAlarm() {
    const alarmInput = document.getElementById("alarm-input");
    const addButton = document.querySelector("button");

    addButton.addEventListener("click", () => {
      if (!/^\d{2}:\d{2}:\d{2}$/.test(alarmInput.value)) {
        alert("hh:mm:ss 형식으로 입력해주세요.");
        return;
      }
      alarmTime = alarmInput.value;
    });
  }

  function checkAlarm() {
    const now = new Date();
    const timeNow = now.toTimeString().split(" ")[0];
    if (alarmTime && timeNow === alarmTime) {
      alert("알람 시간입니다!");
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
  setBattery(batteryLevel);
  startBatteryDrain();
  initAlarm();
  setInterval(checkAlarm, 1000);
})();
