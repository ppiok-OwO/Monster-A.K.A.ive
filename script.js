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

// 오박사님을 대체할 구역의 html을 변수로 선언하기

    //오박사님을 누르면 새로운 html로 대체하기
$(".memberImage1").click(async function () {
    $(".drOh").load('memberIntro1.html');
});
$(".memberImage2").click(async function () {
    $(".drOh").load('memberIntro2.html');
});
$(".memberImage3").click(async function () {
    $(".drOh").load('memberIntro3.html');
});


// 오늘 날짜 표시하기
let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

let today_date = year+"년 "+month+"월 "+date+"일";
$("#today_date").text(today_date);
