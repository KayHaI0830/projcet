function chk(date) {
    let chkDay = new Date(nowYear, nowMonth, date);
    
    let ranRival = Math.floor(Math.random()*10) % 9;
    let ranGround = Math.floor(Math.random()*10) % 2;
    let ranTime = Math.floor(Math.random()*10) % 4;
    let ranScoreSamsung = Math.floor(Math.random()*100) % 10;
    let ranScoreRival = Math.floor(Math.random()*100) % 10;
    let randomGround;

    for(let i = 0; i < lastDate[nowMonth]; i++) {
        document.getElementsByClassName(`calender_date`)[i].style.background = "";
    }
    document.getElementById(`${date}`).style.background = "rgba(135, 206, 250, 0.5)"; //수정

    if(ranGround == 0) randomGround = ground[ranRival];
    else randomGround = "대구";
    
    vsDate.innerHTML = `${nowYear}.`;
    if(nowMonth < 9) vsDate.innerHTML += `0`;
    vsDate.innerHTML += `${nowMonth+1}.`;
    if(date < 10) vsDate.innerHTML += `0`;
    vsDate.innerHTML += `${date}`;
   
    if(chkDay.getDay() == 1) {
        vsTime.innerHTML = `경기 없음`; // 쉬는 날
            vsContent.style.display = "none";
    }
    else if(nowYear == 2022 && nowMonth == 9 &&  date <= 8) {
        if(date == 2) {
            vsTime.innerHTML = `경기 없음`;
            vsContent.style.display = "none";
        }
        else {
            switch(date) {
                case `1`:
                    oct = {
                        "rival": "두산 베어스",
                        "ground": "대구",
                        "time": "17:00",
                        "score": "3",
                        "ss": "4"
                    };
                    break;
                case `4`:
                    oct = {
                        "rival": "kt wiz",
                        "ground": "수원",
                        "time": "18:30",
                        "score": "7",
                        "ss": "3"
                    };
                    break;
                case `5`:
                    oct = {
                        "rival": "kt wiz",
                        "ground": "수원",
                        "time": "18:30",
                        "score": "4",
                        "ss": "7"
                    };
                    break;
                case `6`:
                    oct = {
                        "rival": "두산 베어스",
                        "ground": "잠실",
                        "time": "18:30",
                        "score": "5",
                        "ss": "4"
                    };
                    break;
                case `7`:
                    oct = {
                        "rival": "두산 베어스",
                        "ground": "잠실",
                        "time": "18:30",
                        "score": "2",
                        "ss": "8"
                    };
                    break;
                default:
                    oct = {
                        "rival": "SSG 랜더스",
                        "ground": "대구",
                        "time": "17:00",
                        "score": "1",
                        "ss": "6"
                    };
            }
            vsContent.style.display = "flex";
            
            vsTime.innerHTML = `${oct.ground} ${oct.time}`;
            scoreSamsung.innerHTML = oct.ss;
            scoreRival.innerHTML = oct.score;
            vsRival.innerHTML = `<img src="../images/calender/${oct.rival}.png" alt="${oct.rival}"><p>${oct.rival}</p>`;
        }
    }
    else if(nowYear <= 2022 && nowMonth < 9) {
        vsContent.style.display = "flex";
        vsTime.innerHTML = `${randomGround} ${time[ranTime]}`;
        scoreSamsung.innerHTML = ranScoreSamsung;
        scoreRival.innerHTML = ranScoreRival;
        vsRival.innerHTML = `<img src="../images/calender/${rival[ranRival]}.png" alt="${rival[ranRival]}"><p>${rival[ranRival]}</p>`;
    }
    else {
        vsTime.innerHTML = `경기 예정 없음`;
            vsContent.style.display = "none";
    }
}

function preCalender() {
    nowMonth--;
    if(nowMonth < 0) {
        nowYear--;
        nowMonth = 11;
    }
    setCalender();
}

function nextCalender() {
    nowMonth++;
    if(nowMonth > 11) {
        nowYear++;
        nowMonth = 0;
    }
    setCalender();
}

function buildCalender(date) {
    calenderTable += `<td id="${dateCount}`;
    calenderTable += `" onclick="chk(id);" class="`;
    if(nowYear == now.getFullYear() && nowMonth == now.getMonth() && dateCount == now.getDate()) {
        calenderTable += `today `;
    }
    if (date == 0) calenderTable += `sun `;
    else if (date == 6) calenderTable += `sat `;
    if(nowYear == 2022 && nowMonth == 9 && dateCount !=2 && dateCount <= 8 && date != 1) {
        calenderTable += `date_vs `;
    }
    else if(nowYear <= 2022 && nowMonth < 9 && date != 1) {
        calenderTable += `date_vs `;
    }

    calenderTable += `calender_date">${dateCount++}</td>`;
}

function setCalender() {
    month.innerHTML = (`${nowYear}년 ${nowMonth+1}월`);
    /* month.innerHTML = (`${nowYear}.`);
    if(nowMonth < 9) month.innerHTML += (`0`);
    month.innerHTML += (`${nowMonth+1}`); */
    first = new Date (nowYear, nowMonth, 1);
    firstDay = first.getDay();
    dateCount = 1;
    calenderTable = "<tr>"
    
    for(let i = 0; i < 7; i++) {
        calenderTable += `<th class="day`;
        if (i == 0) calenderTable += ` sun`;
        else if (i == 6) calenderTable += ` sat`;
        calenderTable += `">${day[i]}</th>`;
    }
    calenderTable += "</tr>";
    for(let i = 0; i < 6; i++) {
        calenderTable += "<tr>";
        for(let j = 0; j < 7; j++) {
            if (dateCount == 1 && j != firstDay || dateCount > lastDate[nowMonth]) {
                if(nowYear % 4 == 0 && nowMonth == 1 && dateCount == 29) {
                    buildCalender(j);
                }
                else calenderTable += `<td>&nbsp;</td>`;
            }
            else {
                buildCalender(j);
            }
        }
        calenderTable += "</tr>";
    }
    calender.innerHTML = `<table id="calender_table">${calenderTable}</table>`;
}

function setVs() {
    vsDate.innerHTML = `${now.getFullYear()}.`;
    if(now.getMonth < 9) vsDate.innerHTML += `0`;
    vsDate.innerHTML += `${now.getMonth()+1}.`;
    if(now.getDate() < 10) vsDate.innerHTML += `0`;
    vsDate.innerHTML += `${now.getDate()}`;
    
    vsTime.innerHTML = `대구 17:00`;

    vsContent.style.display = "flex";
    samsung.innerHTML = `<img src="../images/calender/삼성 라이온즈.png" alt="삼성 라이온즈">
                                            <p>삼성라이온즈</p>`;
    scoreSamsung.innerHTML = `6`;
    scoreRival.innerHTML = `1`;
    vsRival.innerHTML = `<img src="../images/calender/SSG 랜더스.png" alt="SSG 랜더스">
                                        <p>SSG 랜더스</p>`;
}

let now = new Date();
let calender = document.getElementById("calender_content");
let nowYear = now.getFullYear();
let nowMonth = now.getMonth();
let first = new Date (nowYear, nowMonth, 1);
let firstDay = first.getDay();
let lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day = ["일", "월", "화", "수", "목", "금", "토"];
/* let day = ["SUN", "MON", "THU", "WED", "THU", "FRI", "SAT"]; */
let month = document.getElementById("month");
let vsDate = document.getElementById("vs_date");
let vsContent = document.getElementById("vs_content");
let vsTime = document.getElementById("vs_time");
let vsRival = document.getElementById("vs_rival");
let scoreSamsung = document.getElementById("score_samsung");
let scoreRival = document.getElementById("score_rival");
let samsung = document.getElementById("samsung");
let dateCount;
let calenderTable;

const ground = ["사직", "광주", "부산", "잠실","대전", "인천", "고척", "창원", "수원"];
const rival = ["두산 베어스", "KIA 타이거즈", "롯데 자이언츠", "LG 트윈스", "한화 이글스", "SSG 랜더스", "키움 히어로즈", "NC 다이노스", "kt wiz"];
const time = ["17:00", "18:00", "18:30", "14:00"];
let oct;

setVs();
setCalender();

addEventListener("resize", function() {
    if(innerWidth < 996) {
        setVs();
        nowYear = now.getFullYear();
        nowMonth = now.getMonth();
        setCalender();
    }
  })