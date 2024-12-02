import AssignWorkDay from '../src/domains/AssignWorkDay.js';

describe('AssignWorkDay 클래스 테스트', () => {
  test('assign 메서드를 통해 비상 근무일을 배정하고 getSchedule 메서드를 통해 근무표를 반환한다.', () => {
    // given
    const month = 5; 
    const startDay = '월';
    const weekDayEmployees = ['준팍', '도밥', '고니', '수아', '루루', '글로', '솔로스타', '우코', '슬링키', '참새', '도리'];
    const weekEndEmployees = ['수아', '루루', '글로', '솔로스타', '우코', '슬링키', '참새', '도리', '준팍', '도밥', '고니'];

    // when
    const assignWorkDay = new AssignWorkDay(weekDayEmployees, weekEndEmployees);
    assignWorkDay.assign(month, startDay);
    const schedule = assignWorkDay.getSchedule();

    // then
    expect(schedule).toEqual([
      { month: 5, day: 1, dayWeek: '월', name: '준팍' },
      { month: 5, day: 2, dayWeek: '화', name: '도밥' },
      { month: 5, day: 3, dayWeek: '수', name: '고니' },
      { month: 5, day: 4, dayWeek: '목', name: '수아' },
      { month: 5, day: 5, dayWeek: '금', name: '루루' },
      { month: 5, day: 6, dayWeek: '토', name: '수아' },
      { month: 5, day: 7, dayWeek: '일', name: '글로' },
      { month: 5, day: 8, dayWeek: '월', name: '루루' },
      { month: 5, day: 9, dayWeek: '화', name: '글로' },
      { month: 5, day: 10, dayWeek: '수', name: '솔로스타' },
      { month: 5, day: 11, dayWeek: '목', name: '우코' },
      { month: 5, day: 12, dayWeek: '금', name: '슬링키' },
      { month: 5, day: 13, dayWeek: '토', name: '솔로스타' },
      { month: 5, day: 14, dayWeek: '일', name: '우코' },
      { month: 5, day: 15, dayWeek: '월', name: '참새' },
      { month: 5, day: 16, dayWeek: '화', name: '도리' },
      { month: 5, day: 17, dayWeek: '수', name: '준팍' },
      { month: 5, day: 18, dayWeek: '목', name: '도밥' },
      { month: 5, day: 19, dayWeek: '금', name: '고니' },
      { month: 5, day: 20, dayWeek: '토', name: '슬링키' },
      { month: 5, day: 21, dayWeek: '일', name: '참새' },
      { month: 5, day: 22, dayWeek: '월', name: '수아' },
      { month: 5, day: 23, dayWeek: '화', name: '루루' },
      { month: 5, day: 24, dayWeek: '수', name: '글로' },
      { month: 5, day: 25, dayWeek: '목', name: '솔로스타' },
      { month: 5, day: 26, dayWeek: '금', name: '우코' },
      { month: 5, day: 27, dayWeek: '토', name: '도리' },
      { month: 5, day: 28, dayWeek: '일', name: '준팍' },
      { month: 5, day: 29, dayWeek: '월', name: '슬링키' },
      { month: 5, day: 30, dayWeek: '화', name: '참새' },
      { month: 5, day: 31, dayWeek: '수', name: '도리' }
    ]);
  });
});
