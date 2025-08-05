/* 오늘 날짜 받아와서 일주일 치 달력 만들기 */

//오늘 날짜(요일) 받기
const week = document.querySelector('.week'); //html에서 week 부분 찾기
const days = ['일','월','화','수','목','금','토']; //날짜 기본 리스트
const date = new Date(); //오늘 날짜 가져오기
const getToday = date.getDay(); //날짜 가져와서 요일(숫자)로 변환

//html 요소의 data-date와 비교해서 오늘이 어느 자리인지 파악하기
    const day = document.querySelectorAll('.week>div');//week 하위 일주일 찾아서 가져오기
    day.forEach(item => {
        const whichDay = item.dataset.date; //data-date 속성 값 넣기
        if(getToday == whichDay){  //속성 값과 today 값 비교하기
             const today = day[whichDay]//맞으면 today 값에 요일 값 저장
        
             /* 해당 요일과 며칠인지 추출해 달력 부분에 출력하기 */
             const btn = document.createElement('button');
             today.appendChild(btn);
             const todayChild = today.querySelector('button');
             todayChild.textContent = `${days[date.getDay()]} ${date.getDate()}`;
             /* 하루 출력한 것 기반으로 그 일주일 출력하기 */
             
        }
    });


