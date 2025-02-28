// 이벤트 타입 정의
export const EVENT_TYPES = {
  COUNTUP: {
    key: "countup",
    label: "카운트업",
    needsEndDate: true,
  },
  COUNTDOWN: {
    key: "countdown",
    label: "카운트다운",
    needsEndDate: true,
  },
  ONGOING: {
    key: "ongoing",
    label: "진행중",
    needsEndDate: false,
  },
};

// 반복 주기 옵션
export const REPEAT_OPTIONS = {
  DAILY: {
    label: "매일",
    days: 1,
  },
  THREE_DAYS: {
    label: "3일",
    days: 3,
  },
  WEEKLY: {
    label: "1주일",
    days: 7,
  },
  TWO_WEEKS: {
    label: "2주일",
    days: 14,
  },
  MONTHLY: {
    label: "1개월",
    days: 30,
  },
  TWO_MONTHS: {
    label: "2개월",
    days: 60,
  },
  THREE_MONTHS: {
    label: "3개월",
    days: 90,
  },
  SIX_MONTHS: {
    label: "6개월",
    days: 180,
  },
  NINE_MONTHS: {
    label: "9개월",
    days: 270,
  },
  YEARLY: {
    label: "1년",
    days: 365,
  },
};

// 이벤트 데이터 스키마
export const EVENT_SCHEMA = {
  title: String, // 이벤트 제목
  type: String, // 이벤트 타입
  startDate: Date, // 시작일
  endDate: Date, // 종료일 (ONGOING 타입은 null)
  createdAt: Date, // 생성일
  userId: String, // 사용자 ID
  style: {
    // 스타일 설정
    tileColor: String, // 기본 타일 색
    progressColor: String, // 진행 타일 색
    titleColor: String, // 제목 색
  },
};
