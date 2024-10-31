import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAViTElQQD1d5t7CCv8_uglHT77suL2jF0",
    authDomain: "sparta-4253b.firebaseapp.com",
    projectId: "sparta-4253b",
    storageBucket: "sparta-4253b.appspot.com",
    messagingSenderId: "971445982056",
    appId: "1:971445982056:web:1a3a86105c2eb1f09ffcdd",
    measurementId: "G-MBVJTVH8LL"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
// export default db;
export {app, db, collection, addDoc, getDocs, serverTimestamp, query, orderBy};