// 이벤트 타입
export const EVENT_TYPES = {
  COUNTUP: {
    key: "countup",
    label: "Count Up",
    needsEndDate: true, // 종료일 필요
  },
  COUNTDOWN: {
    key: "countdown",
    label: "Count Down",
    needsEndDate: true, // 종료일 필요
  },
  ONGOING: {
    key: "ongoing",
    label: "Ongoing",
    needsEndDate: false, // 종료일 불필요
  },
};

// 이벤트 스키마
export const EVENT_SCHEMA = {
  title: String, // 이벤트 제목
  type: String, // 이벤트 타입
  startDate: Date, // 시작일
  endDate: Date, // 종료일 (ONGOING은 null)
  createdAt: Date, // 생성일
  style: {
    // 스타일 설정
    backgroundColor: String, // 배경 타일 색
    basicTileColor: String, // 기본 타일 색
    progressColor: String, // 진행 타일 색
    titleColor: String, // 제목 색
  },
};
