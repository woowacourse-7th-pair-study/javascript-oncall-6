import Scheduler from "../src/model/Scheduler";
const mockCalendar = [
  { day: "월", isPublicHoliday: false },
  { day: "화", isPublicHoliday: false },
  { day: "수", isPublicHoliday: true },
  { day: "목", isPublicHoliday: false },
  { day: "금", isPublicHoliday: true },
  { day: "토", isPublicHoliday: false },
  { day: "일", isPublicHoliday: false },
  { day: "월", isPublicHoliday: false },
  { day: "화", isPublicHoliday: false },
  { day: "수", isPublicHoliday: false },
];
const mockSchedulerWithoutDouble = [
  { day: "월", isPublicHoliday: false, worker: "일일" },
  { day: "화", isPublicHoliday: false, worker: "이이" },
  { day: "수", isPublicHoliday: true, worker: "일일" },
  { day: "목", isPublicHoliday: false, worker: "삼삼" },
  { day: "금", isPublicHoliday: true, worker: "이이" },
  { day: "토", isPublicHoliday: false, worker: "삼삼" },
  { day: "일", isPublicHoliday: false, worker: "사사" },
  { day: "월", isPublicHoliday: false, worker: "사사" },
  { day: "화", isPublicHoliday: false, worker: "오오" },
  { day: "수", isPublicHoliday: false, worker: "일일" },
];
describe("Scheduler 객체 테스트", () => {
  const scheduler = new Scheduler(
    ["일일", "이이", "삼삼", "사사", "오오"],
    ["일일", "이이", "삼삼", "사사", "오오"],
    mockCalendar
  );
  test("순서대로 돌아가는지 확인", () => {
    expect(scheduler.getWeekdayWorker(0)).toBe("일일");
    expect(scheduler.getWeekdayWorker(4)).toBe("오오");
    expect(scheduler.getWeekdayWorker(6)).toBe("이이");
    expect(scheduler.getholidayWorker(6)).toBe("이이");
    expect(scheduler.getholidayWorker(1)).toBe("이이");
  });
  test("연속 고려안한 스케쥴러 잘 생성하는지 확인", () => {
    expect(scheduler.scheduler).toEqual(mockSchedulerWithoutDouble);
  });
});
