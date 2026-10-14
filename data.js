/*
  물리 수업 자료실 — 자료 목록
  ------------------------------------------------------------
  새 자료를 올릴 때는 맨 아래 items 배열에 한 줄을 추가한다.

  { title:   "정상파 탐구",                // 화면에 보이는 이름
    type:    "sim",                        // learn 개념 학습 | sim 시뮬레이션 | lab 탐구 활동 | quiz 퀴즈 | tool 수업 도구 | doc 자료
    subject: "mechanics",                  // 아래 subjects 의 id
    lesson:  "III-2-03",                   // 자료 앞에 붙는 차시 코드 (생략 가능)
    href:    "sims/standing-wave.html",    // 이 폴더 기준 상대 경로
    thumb:   "assets/thumbs/standing-wave.svg", // 카드에 보이는 그림 (16:9, 생략 가능)
    desc:    "줄과 관에서 정상파 만들기",  // 한 줄 설명 (생략 가능)
    added:   "2026-10-12" }                // 올린 날짜
*/
window.SITE = {
  name: "물리 수업 자료실",
  tagline: "수업에서 쓰는 시뮬레이션과 보조 자료를 모아 두는 곳",
  term: "2026학년도",

  types: {
    learn: "개념 학습",
    sim: "시뮬레이션",
    lab: "탐구 활동",
    quiz: "퀴즈",
    tool: "수업 도구",
    doc: "자료"
  },

  subjects: [
    { id: "mechanics", name: "역학과 에너지", units: [] },
    { id: "science", name: "통합과학", units: [] },
    { id: "physics", name: "물리학", units: [] },
    { id: "physics2", name: "물리학II", units: [] },
    { id: "common", name: "수업 도구", units: [] }
  ],

  items: [
    { title: "열역학 제1법칙 준비 학습", type: "learn", subject: "mechanics", lesson: "II-1-03",
      href: "sims/first-law-prep.html", thumb: "assets/thumbs/first-law-prep.svg",
      desc: "온도·열·압력·기체 법칙·일·부호·그래프, 미리 알아야 할 개념 7가지", added: "2026-10-12" },
    { title: "열역학 제1법칙 탐구", type: "sim", subject: "mechanics", lesson: "II-1-03",
      href: "sims/first-law.html", thumb: "assets/thumbs/first-law.svg",
      desc: "기초 다지기부터 등온·단열·등압·등적 탐구, 한눈에 정리까지", added: "2026-10-12" }
  ]
};
