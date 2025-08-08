//사이드바에 열고 닫는 버튼 기능 추가

//기본 버튼 선택
const sidebarClose = document.getElementById('sidebar_lock');


//버튼에 닫는 기능과 그 자리에 있을 열기 버튼 추가
sidebarClose.addEventListener('click', function () {
    controlSidebar();
});

/* 사이드바 닫기 기능 함수  */
function controlSidebar() {
    //사이드바 위치 이동
    const sidebar = document.querySelector('nav');
    sidebar.style.transform = 'translate(calc(-1*var(--sidebarWidth)), 0)';  
    //열기 버튼 생성
    const newBtn = document.createElement('button');
    newBtn.id = 'sidebar_open'; //id 부여
    const addIcon = document.createElement('i'); // 열기 icon 생성
    addIcon.className = 'fas fa-chevron-right';
    newBtn.append(addIcon); //열기 버튼에 icon 추가
    //열기 버튼 생성 위치
    const whereBtn = document.getElementById('whole-wrapper');   
    whereBtn.append(newBtn);
    //메인 콘텐츠 레이아웃 변경
    const background = document.getElementById('whole-wrapper');
    
    /* 사이드바 열기 기능 */
    newBtn.addEventListener('click', function(){//사이드바 원래 위치로 이동
        sidebar.style.transform = 'translate(0, 0)'; 
        setTimeout(() => {
            newBtn.remove(); //겹침 방지
        }, 300);
        
    });
    
}


