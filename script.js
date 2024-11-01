// 디렉토리에서 html을 로드하는 메서드
function loadIntro(num) {
    $('link[rel="stylesheet"]').attr('href', `styles_css/styles${num}.css`);
    $(".DrOh").empty();
    $(".DrOh").load(`memberIntro_html/memberIntro${num}.html`);
}

// 몬스터볼을 누르면 오박사님을 새로운 html 파일로 대체하기
// 각 html 파일에 해당하는 css 파일 적용하기
for (let i = 1; i <= 6; i++) {
    $(`.MemberImage${i}`).click(function () {
        loadIntro(i);
    });
}

// 랜덤 포켓몬을 구경해보자!
$("#randomPokemon").click(function () {
    const ball_num = Math.floor(Math.random() * 6) + 1;
    loadIntro(ball_num);
});

// 오늘 날짜 표시하기
let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

let today_date = year + "년 " + month + "월 " + date + "일";
$("#today_date").text(today_date);

// 팀 소개 모달 창이 튀어나옵니다!
document.querySelector('#teamIntro').addEventListener('click', function () {
    document.querySelector('.TeamIntro').style.display = 'block';
});
// 팀 소개 모달 창이 닫힙니다!
document.querySelector('.ClosePopUp').addEventListener('click', function () {
    document.querySelector('.TeamIntro').style.display = 'none';
});

// 검색 기능!
function searchPokemon() {
    // 검색창에 입력한 값을 변수에 저장
    let searchInput = $('#searchInput').val();
    // 포켓몬 도감 페이지 url에 searchInput 문자열을 합쳐주기
    let url = "https://pokemonkorea.co.kr/pokedex?word=" + searchInput;
    // 새 창에서 열기
    window.open(url);
}
// 엔터를 누르면 검색
$('#searchInput').keydown(function (event) {
    if (event.which === 13) {
        searchPokemon();
    }
});
// 검색 버튼을 눌러도 검색
$('#searchButton').click(searchPokemon);
