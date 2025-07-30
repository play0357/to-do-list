/* to-do-list만들기 */
/* 입력값을 받아서 버튼을 클릭하면 변수에 그 입력값을 저장해 list의 자식요소로 추가하고 html에 출력하기 각 리스트마다 완료, 삭제 기능 추가 */
//입력값 받아서 텍스트로 저장하기
//버튼 변수 저장


//할 일 리스트 추가 버튼 기능 구현
function addTodo() {
    const input = document.getElementById('to-do');
    //text 값 변환
    const text = input.value;
    //리스트 변수 생성
    const list = document.getElementById('to-do-list');
    //자식 할일 리스트 추가 기능 생성
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.textContent = `▷ ${text}`;
    //리스트에 자식 할일 추가하기
    if (span.textContent) {
        list.appendChild(li);
    } else {// 입력값 없을 시 에러 처리  
        console.error('No data');
        alert('입력값이 없습니다.');
    }

    //추가된 할 일에 완료 / 삭제 기능 버튼 추가
    // 삭제 기능
    const delBtn = document.createElement('button');
    li.appendChild(delBtn);
    delBtn.classList.add('delbtn');
    /* 삭제 text 아이콘으로 대체 */
    const icon = document.createElement('i');
    icon.className = 'fas fa-trash';
    delBtn.appendChild(icon);
    delBtn.addEventListener('click', function () {
        li.remove();
    })
    //완료 기능
    /* input box로 구현하기 */
    // const complBtn = document.createElement('input');
    // li.appendChild(complBtn);
    // complBtn.type = 'checkbox';
    // complBtn.classList.add('combtn');
    // complBtn.addEventListener('click',function(){
    //     li.classList.toggle('complete');
    // });
    const complBtn2 = document.createElement('button'); //할 일 완료버튼 추가
    li.appendChild(complBtn2); //리스트 목록의 자식요소로 버튼 추가
    complBtn2.classList.add('combtn2'); //해당 스타일 클래스 추가
    /* 완료버튼 v자 디자인 추가 */
    const bar1 = document.createElement('span');  //bar1
    bar1.classList.add('combtn_bar1');
    const bar2 = document.createElement('span'); //bar2
    bar2.classList.add('combtn_bar2');
    complBtn2.appendChild(bar1);
    complBtn2.appendChild(bar2);
    complBtn2.addEventListener('click', function () { //toggle 색변경
        li.classList.toggle('complete');
        if (li.classList.contains('complete')) {
            complBtn2.style.background = '#4966ff';
            bar1.style.background = '#fff';
            bar2.style.background = '#fff';
        }else{
            complBtn2.style.background = '#fff';
            bar1.style.background = '#4966ff';
            bar2.style.background = '#4966ff';
        }

    });


}
//클릭시 함수 기능 작동하기
const btn = document.querySelector('.addTodo');
btn.addEventListener('click', addTodo);


/*날짜 부여 */



/* 초기화 기능 */




/* 리스트 저장 기능  */







