// firebase 기본 세팅하기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
    collection,
    addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// Firebase 구성 정보 설정
const firebaseConfig = {
    apiKey: "AIzaSyAViTElQQD1d5t7CCv8_uglHT77suL2jF0",
    authDomain: "sparta-4253b.firebaseapp.com",
    projectId: "sparta-4253b",
    storageBucket: "sparta-4253b.appspot.com",
    messagingSenderId: "971445982056",
    appId: "1:971445982056:web:1a3a86105c2eb1f09ffcdd",
    measurementId: "G-MBVJTVH8LL",
};
// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 디렉토리에서 html을 로드하는 메서드
function loadIntro(num) {
    $('link[rel="stylesheet"]').attr('href', `styles${num}.css`);
    $(".DrOh").empty();
    $(".DrOh").load(`memberIntro${num}.html`);
}

// 몬스터볼을 누르면 오박사님을 새로운 html 파일로 대체하기
// 각 html 파일에 해당하는 css 파일 적용하기
for (let i = 1; i <= 6; i++) {
    $(`.MemberImage${i}`).click(function () {
        loadIntro(i);
    });
}

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
// $('#teamIntro').on('click', function () {
//     $('.TeamIntro').css('display', 'block');
// });

// $('.ClosePopUp').on('click', function () {
//     $('.TeamIntro').css('display', 'none');
// });

document.querySelector('#teamIntro').addEventListener('click', function () {
    document.querySelector('.TeamIntro').style.display = 'block';
});

document.querySelector('.ClosePopUp').addEventListener('click', function () {
    document.querySelector('.TeamIntro').style.display = 'none';
});

// 검색 기능!
$('#searchButton').click(function () {
    // 검색창에 입력한 값을 변수에 저장
    let searchInput = $('#searchInput').val();
    // 포켓몬 도감 페이지 url에 searchInput 문자열을 합쳐주기
    let url = "https://pokemonkorea.co.kr/pokedex?word=" + searchInput;
    // 새 창에서 열기
    window.open(url);
});

