/**
 * 랜딩페이지 문구 모음
 * - 글자만 바꾸고 싶으면 이 파일만 수정하면 돼요. (컴포넌트 코드는 건드리지 않아도 됨)
 * - 내용 출처: 봄펫 노션 기획, PRD, 유저플로우 자료
 */

export const site = {
  name: "봄펫",
  title: "봄펫 | 반려동물 맡길 때, 돌봄 정보를 링크 하나로",
  description:
    "여행·출장·외박으로 반려동물을 맡길 때, 돌봄 일정과 주의사항을 링크 하나로 전달하고 돌봄자의 완료 체크로 진행 상황을 확인하세요.",
};

/** 헤더 메뉴 (href는 각 섹션의 id) */
export const navItems = [
  { label: "왜 봄펫인가요", href: "#problem" },
  { label: "사용 방법", href: "#how" },
  { label: "직접 체험", href: "#demo" },
  { label: "기대효과", href: "#benefits" },
];

export const hero = {
  eyebrow: "반려동물 돌봄 인수인계 서비스",
  titleLines: ["맡긴 뒤에도 안심되게,", "돌봄 정보는 링크 하나로"],
  description:
    "밥·약·산책·주의사항을 한 번에 정리해 공유하고, 돌봄자가 완료를 체크하면 보호자는 바로 확인해요.",
  primaryCta: "사전 신청하기",
  secondaryCta: "직접 체험해보기",
  points: ["앱 설치 없이", "돌봄자는 가입 없이", "모든 반려동물"],
};

export const problem = {
  eyebrow: "이런 경험 있으신가요?",
  title: "반려동물을 맡기고도, 계속 마음 쓰이셨죠?",
  description:
    "카톡·사진·전화로 흩어진 돌봄 정보, 돌봄자는 다시 찾아보고 보호자는 맡긴 뒤에도 계속 묻게 돼요. 낯선 동물이라면 그 불안은 더 커지죠.",
  /** 문제 섹션의 대화 예시 (from: owner=보호자, sitter=돌봄자) */
  chat: {
    title: "민지 (코코 돌봄자)",
    messages: [
      { from: "owner", time: "오전 7:40", text: "아침 8시에 사료 40g! 먹고 나면 약 한 알 주고, 산책은 저녁에 30분이야. 목줄 꼭 하고 간식은 2개까지만…" },
      { from: "owner", time: "오전 7:41", text: "📷 약 봉투 사진" },
      { from: "sitter", time: "오전 8:20", text: "사료 몇 g이라고 했지? 약은 밥 먹기 전이었나…?" },
      { from: "owner", time: "오후 1:12", text: "밥 줬어?" },
      { from: "owner", time: "오후 3:05", text: "약은 먹였지?" },
      { from: "owner", time: "오후 7:30", text: "산책은 했어?" },
    ],
    caption: "맡긴 날 하루 동안 오간 대화 예시",
  },
  pains: [
    {
      title: "전달할 정보가 너무 많아요",
      body: "사료량·시간·약·산책·온습도·주의사항까지. 설명하다 보면 카톡이 끝없이 길어져요.",
      quote: "설명해야 할 게 너무 많아.",
    },
    {
      title: "정보가 여러 곳에 흩어져요",
      body: "사료는 카톡, 약은 사진, 주의사항은 전화로. 돌봄자는 매번 다시 찾아봐야 해요.",
      quote: "분명 설명했는데 어디에 보냈는지 모르겠어.",
    },
    {
      title: "맡긴 뒤에도 불안해요",
      body: "잘 전달했어도 실제로 했는지는 알 수 없어서 여행 중에도 계속 확인 연락을 해요.",
      quote: "잘하고 있는지 계속 신경 쓰여.",
    },
    {
      title: "낯선 동물은 더 어려워요",
      body: "파충류·설치류·조류·어류처럼 관리법이 익숙하지 않은 동물은 실수 걱정이 더 커요.",
      quote: "잘못했다가 문제 생길까 봐 부담돼.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "봄펫은 이렇게 해결해요",
  title: "링크 하나로, 전달부터 확인까지",
  description:
    "할 일과 주의사항을 정리해 링크 하나로 보내면, 돌봄자는 가입 없이 열어 체크만 하면 돼요. 체크하는 순간 보호자에게 완료 시간이 기록돼요.",
  steps: [
    {
      number: "01",
      title: "돌봄 일정 작성",
      body: "날짜·시간별 할 일과 주의사항, 비상 연락처를 한 화면에서 정리해요.",
      who: "보호자",
    },
    {
      number: "02",
      title: "링크 하나로 공유",
      body: "카톡·문자로 링크만 보내면 끝. 돌봄자는 앱 설치나 회원가입 없이 바로 열어봐요.",
      who: "보호자 → 돌봄자",
    },
    {
      number: "03",
      title: "완료 체크 & 확인",
      body: "돌봄자가 한 일을 체크하면 완료 시간이 기록되고, 보호자는 진행 현황에서 바로 확인해요.",
      who: "돌봄자 → 보호자",
    },
  ],
  extras: [
    {
      title: "강아지·고양이부터 특수동물까지",
      body: "파충류·설치류·조류·어류처럼 돌봄 방법이 다른 반려동물도 같은 방식으로 전달해요.",
    },
    {
      title: "PC에서는 대시보드로",
      body: "지난 맡김 이력과 다가오는 돌봄 일정을 한눈에 볼 수 있어요.",
    },
  ],
  /** PC 대시보드 미리보기용 예시 데이터 */
  history: [
    { pet: "코코", period: "9/24 – 9/26", sitter: "김민지", status: "완료 12/12", done: true },
    { pet: "나비", period: "10/3 – 10/4", sitter: "이수진", status: "완료 6/6", done: true },
    { pet: "코코", period: "11/21 – 11/23", sitter: "김민지", status: "D-16 예정", done: false },
  ],
};

export const demo = {
  eyebrow: "직접 써보세요",
  title: "보호자와 돌봄자 화면, 눌러보면 알아요",
  description: "보호자가 링크를 만들고 → 돌봄자가 체크하면 → 보호자 화면에 바로 반영돼요.",
  steps: [
    { id: 1, short: "링크 만들기", who: "보호자", title: "돌봄 일정 저장하고 링크 만들기", body: "작성한 일정을 확인하고 공유 링크를 생성해요." },
    { id: 2, short: "체크하기", who: "돌봄자", title: "링크로 접속해 완료 체크", body: "가입 없이 오늘 할 일을 보고, 끝낸 일을 눌러 체크해요." },
    { id: 3, short: "확인하기", who: "보호자", title: "진행 현황 확인", body: "언제 무엇을 했는지 시간과 함께 확인해요. 다시 물어볼 필요가 없어요." },
  ] as const,
  pet: { name: "코코", breed: "말티즈", age: "5살", period: "9/24 – 9/26", date: "9월 24일 (화)" },
  caution: "산책 시 목줄 필수. 낯선 사람을 경계해요. 간식은 하루 2개 이하.",
  contact: "보호자 010-1234-5678 · 강남 24시 동물병원",
  link: "bompet.app/care/coco-0924",
  tasks: [
    { id: "breakfast", label: "아침 사료 (40g)", time: "08:00", kind: "meal" },
    { id: "pill", label: "심장사상충 약 1알", time: "08:30", kind: "pill" },
    { id: "walk", label: "산책 30분", time: "18:00", kind: "walk" },
    { id: "dinner", label: "저녁 사료 + 물 교체", time: "19:00", kind: "water" },
  ] as const,
};

export const benefits = {
  eyebrow: "봄펫과 함께라면",
  title: "맡긴 뒤에도 마음 편하게",
  description: "확인 연락 대신 완료 기록으로 안심하고, 돌봄자는 지금 할 일만 보면 돼요.",
  promise: "내가 없어도 우리 아이가 평소 루틴대로 돌봄받고 있다는 확신",
  items: [
    {
      title: "보호자의 불안 감소",
      body: "“밥 줬어?” 다시 묻지 않아도 완료 시간이 기록돼요.",
      sample: ["08:03 아침 사료 완료", "08:15 약 복용 완료", "19:20 산책 완료"],
    },
    {
      title: "돌봄자의 부담 감소",
      body: "긴 설명서 대신 지금 해야 할 돌봄만 시간순으로 보여줘요.",
    },
    {
      title: "전달 오류 감소",
      body: "카톡·전화·사진에 흩어진 정보를 하나의 돌봄 루틴으로 정리해 빠뜨릴 일을 줄여요.",
    },
    {
      title: "반복 설명 감소",
      body: "한 번 만든 돌봄 정보를 다음 맡김에도 다시 쓸 수 있게 준비하고 있어요.",
      tag: "출시 예정",
    },
  ],
};

export const signup = {
  title: "맡기는 날, 걱정 대신 체크 알림을 받아보세요",
  description: "봄펫이 출시되면 가장 먼저 알려드릴게요.",
  placeholder: "이메일 주소",
  button: "출시 알림 받기",
  note: "앱 설치 없이, 웹에서 바로 쓸 수 있어요.",
  errorEmpty: "이메일 주소를 입력해 주세요.",
  errorInvalid: "이메일 주소를 다시 확인해 주세요.",
  successTitle: "신청 완료! 🐾",
  successBody: "출시되면 가장 먼저 알려드릴게요.",
  reset: "다른 이메일로 신청하기",
};
