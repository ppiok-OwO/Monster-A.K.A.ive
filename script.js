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

let memberIntro =
    `
    <div class="memberIntro">
        <img src="images/벼리짱.png" class="member1Pocketmon">
        <div class="card text-bg-warning mb-3" style="max-width: 20rem;">
            <div class="card-header">최슬기</div>
            <div class="card-body">
                <h5 class="card-title">강철 포켓몬(희망)</h5>
                <p class="card-text">성별 | ♀<br>특성 | 10년차 <a href="https://www.t1.gg/teams/leagueoflegends" target="_blank">T1팬</a>.<br>언제나 T1을 응원한다!</p>
            </div>
        </div>
        <div class="card text-bg-warning mb-3" style="max-width: 30rem;">
            <div class="card-header">좋아하는 것</div>
            <div class="card-body">
                <h5 class="card-title">반민초파, 강아지파, INFP</h5>
                <p class="card-text">걸그룹 | 에스파, 레드벨벳<br>밴드 | 라쿠나, 실리카겔<br>게임 | 하스스톤, 롤, 테라리아</p>
            </div>
        </div>
    </div>
    `
    ;

$(".memberImage1").click(async function () {
    $(".drOh").html(memberIntro);
})

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

let today_date = year+"년 "+month+"월 "+date+"일";
$("#today_date").text(today_date);
