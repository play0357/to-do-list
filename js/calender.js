/* 오늘 날짜 받아와서 일주일 치 달력 만들기 */

//오늘 날짜(요일) 받기
const week = document.querySelector('.week');
const days = ['일', '월', '화', '수', '목', '금', '토'];
const date = new Date(); //오늘 날짜 가져오기
const getToday = date.getDay(); //날짜 가져와서 요일(숫자)로 변환
const day = document.querySelectorAll('.week>.day'); //html에서 달력 부분 가져오기 

//이번 주 일요일 날짜 구하기
const sunday = new Date(date);
sunday.setDate(date.getDate() - getToday);//오늘 요일을 기준으로 며칠 전으로 되돌아 가야하는지 구해서 날짜 구하기 ex) 오늘이 수요일이면 기존 date에 -3을 해서 3일전으로 되돌아가면 그 날짜가 일요일

//일주일(일~토) 날짜칸 채우기
day.forEach((div, i) => {
    //해당 요일 날짜 구하기
    const thisday = new Date(sunday);
    thisday.setDate(sunday.getDate() + i)//일요일 부터 날짜를 하나씩 더하면서 토요일까지 날짜 구하기

    //기존 내용 비우기 div -> day[i]랑 똑같다.
    div.innerHTML = '';

    //각 일자에 버튼 추가하기
    const btn = document.createElement('button');
    btn.textContent = `${days[i] /* 요일 */} ${thisday.getDate() /* 날짜 */}`
    
    div.appendChild(btn);

    //오늘이라면 class 추가하기
    if (i === getToday) {
        btn.classList.add('today');
    }
});


