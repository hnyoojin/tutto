# 프로젝트명

tutto - day tracker

## 프로젝트 소개
사용자는 tutto는 본인이 원하는 이벤트에 맞게 커스텀하여 day tracking을 할 수 있습니다.
제작자가 습관 형성을 위해 매일 무언가를 할 때, 매일 무언가를 하고 있다는 시각적인 성취감을 느끼고 싶다는 생각에서 개발을 시작했습니다.

## 사용 기술

- React 19.0.0
- Firebase 11.3.1

## 주요 기능
- 원하는 이벤트 커스텀 가능
- Count down, Count up 기능
- 완료도를 %로 표현
- ...

## 폴더 구조

src/
├── components/
│   ├── common/           
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Modal/
│   ├── layout/          
│   │   └── Navigation/
│   └── countdown/       # 카운트다운 관련 컴포넌트
│       ├── CountdownCard/       # 각 카운트다운 항목 카드
│       ├── CountdownCreator/    # 새 카운트다운 생성 폼
│       ├── CountdownList/       # 카운트다운 목록
│       ├── ProgressBar/         # 진행률 표시
│       └── TimeDisplay/         # 남은 시간 표시
├── firebase/
│   ├── config.js
│   ├── auth.js          
│   └── db.js            # 카운트다운 데이터 CRUD
├── hooks/              
│   ├── useAuth.js
│   ├── useCountdown.js  # 카운트다운 로직
│   └── useTimer.js      # 타이머 로직
├── routes/             
│   ├── Auth.js          # 로그인/회원가입
│   ├── Home.js          # 메인 카운트다운 목록
│   ├── Create.js        # 새 카운트다운 생성
│   └── Detail.js        # 카운트다운 상세
├── utils/              
│   ├── dateUtils.js     # 날짜 계산 유틸
│   └── timeFormatter.js # 시간 포맷팅
└── styles/             
    └── globals.css
