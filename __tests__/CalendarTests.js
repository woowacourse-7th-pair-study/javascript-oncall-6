import Calendar from "../src/model/Calendar";

describe("Calendar 객체 테스트", () => {
  test("공휴일 체크 테스트", () => {
    const calendar = new Calendar([6, "목"]);
    //6월 6일은 화요일
    expect(calendar.isPublicHoliday(6)).toBeTruthy();
    expect(calendar.isPublicHoliday(10)).toBeFalsy();
  });
  test("알맞은 day 얻는지 테스트", () => {
    const calendar = new Calendar([6, "금"]);
    expect(calendar.getDay(2)).toBe("토");
    expect(calendar.getDay(3)).toBe("일");
    expect(calendar.getDay(4)).toBe("월");
    expect(calendar.getDay(8)).toBe("금");
  });
  test("Calendar 생성 테스트", () => {
    const calendar = new Calendar([1, "화"]);
    const thisMonthCalendar = calendar.calendar;
    expect(thisMonthCalendar.length).toBe(31);
    expect(thisMonthCalendar[0].isPublicHoliday).toBeTruthy();
    expect(thisMonthCalendar[2].isPublicHoliday).toBeFalsy();
    expect(thisMonthCalendar.at(-1).day).toBe("목");
  });
});
