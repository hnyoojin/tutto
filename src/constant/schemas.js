// 이벤트 타입 정의
export const EVENT_TYPES = {
  COUNTDOWN: {
    key: "countdown",
    label: "카운트다운",
  },
  COUNTUP: {
    key: "countup",
    label: "카운트업",
  },
  ONGOING: {
    key: "ongoing",
    label: "진행중",
  },
};

// 이벤트 데이터 스키마
export const EVENT_SCHEMA = {
  title: String,
  type: String,
  startDate: String,
  endDate: String,
  createdAt: String,
  style: {
    tileColor: String, // 기본 타일
    progressColor: String, // 진행 타일
  },
};

// 기본 이벤트 템플릿
export const DEFAULT_EVENT = {
  title: "",
  type: "countdown",
  startDate: "",
  endDate: "",
  style: {
    tileColor: "#ffffff",
    progressColor: "#4ade80",
  },
};
