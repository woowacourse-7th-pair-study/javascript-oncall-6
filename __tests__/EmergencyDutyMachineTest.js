import EmergencyDutyMachine from '../src/Model/EmergencyDutyMachine.js';
import EmergencyDutyScheduler from '../src/Model/EmergencyDutyScheduler.js';

const weekdayStaff =
  '허브,쥬니,말랑,라온,헤나,우코,에단,수달,파워,히이로,마코,슬링키,모디,연어,깃짱,리오,고니,박스터,달리,조이,노아이즈,도이,도치,홍고,스캇,폴로,해시,로지,첵스,아이크,우가,푸만능,애쉬,로이스,오션';

const weekendStaff =
  '오션,로이스,애쉬,푸만능,우가,아이크,첵스,로지,해시,폴로,스캇,홍고,도치,도이,노아이즈,조이,달리,박스터,고니,리오,깃짱,연어,모디,슬링키,마코,히이로,파워,수달,에단,우코,헤나,라온,말랑,쥬니,허브';

const testCases = [
  {
    dutyMonth: 10,
    startDays: '수',
    expected: [
      '10월 1일 수 허브',
      '10월 2일 목 쥬니',
      '10월 3일 금(휴일) 오션',
      '10월 4일 토 로이스',
      '10월 5일 일 애쉬',
      '10월 6일 월 말랑',
      '10월 7일 화 라온',
      '10월 8일 수 헤나',
      '10월 9일 목(휴일) 푸만능',
      '10월 10일 금 우코',
      '10월 11일 토 우가',
      '10월 12일 일 아이크',
      '10월 13일 월 에단',
      '10월 14일 화 수달',
      '10월 15일 수 파워',
      '10월 16일 목 히이로',
      '10월 17일 금 마코',
      '10월 18일 토 첵스',
      '10월 19일 일 로지',
      '10월 20일 월 슬링키',
      '10월 21일 화 모디',
      '10월 22일 수 연어',
      '10월 23일 목 깃짱',
      '10월 24일 금 리오',
      '10월 25일 토 해시',
      '10월 26일 일 폴로',
      '10월 27일 월 고니',
      '10월 28일 화 박스터',
      '10월 29일 수 달리',
      '10월 30일 목 조이',
      '10월 31일 금 노아이즈',
    ],
  },
  {
    dutyMonth: 12,
    startDays: '금',
    expected: [
      '12월 1일 금 허브',
      '12월 2일 토 오션',
      '12월 3일 일 로이스',
      '12월 4일 월 쥬니',
      '12월 5일 화 말랑',
      '12월 6일 수 라온',
      '12월 7일 목 헤나',
      '12월 8일 금 우코',
      '12월 9일 토 애쉬',
      '12월 10일 일 푸만능',
      '12월 11일 월 에단',
      '12월 12일 화 수달',
      '12월 13일 수 파워',
      '12월 14일 목 히이로',
      '12월 15일 금 마코',
      '12월 16일 토 우가',
      '12월 17일 일 아이크',
      '12월 18일 월 슬링키',
      '12월 19일 화 모디',
      '12월 20일 수 연어',
      '12월 21일 목 깃짱',
      '12월 22일 금 리오',
      '12월 23일 토 첵스',
      '12월 24일 일 로지',
      '12월 25일 월(휴일) 해시',
      '12월 26일 화 고니',
      '12월 27일 수 박스터',
      '12월 28일 목 달리',
      '12월 29일 금 조이',
      '12월 30일 토 폴로',
      '12월 31일 일 스캇',
    ],
  },
];

describe('근무 배정 기계 객체 테스트', () => {
  test.each(testCases)(
    'assignDutyStaff 근무 배정 메서드가 잘 동작하는지 확인한다.',
    ({ dutyMonth, startDays, expected }) => {
      const scheduler = new EmergencyDutyScheduler(dutyMonth, startDays);
      const machine = new EmergencyDutyMachine(
        weekdayStaff.split(','),
        weekendStaff.split(','),
      );

      scheduler.assignMonthDutyStaff(machine);
      const scheduleObject = scheduler.getScheduleForPrint();
      expect(
        scheduleObject.map(
          ({ month, date, days, staff, isPrintHolidayString }) =>
            `${month}월 ${date}일 ${days}${isPrintHolidayString ? '(휴일)' : ''} ${staff}`,
        ),
      ).toStrictEqual(expected);
    },
  );
});
