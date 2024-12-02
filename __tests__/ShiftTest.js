import { ERROR_MESSAGE } from '../src/constant/message.js';
import Shift from '../src/Shift.js';

const errorCase = [
  {
    caseName: '중복되는 이름이 있는 경우',
    inputs: ['준팍,도밥,고니,수아,루루,글로,수아'],
    errorMessage: ERROR_MESSAGE.shiftNoDuplicate,
  },
  {
    caseName:
      '비상 근무자의 수가 최소 5명 ~ 최대 35명의 범위를 지키지 않는 경우',
    inputs: [
      '지예,지은',
      '가,나,다,라,마,바,사,아,자,차,카,타,파,하,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,까,따',
    ],
    errorMessage: ERROR_MESSAGE.shiftLengthNotInRange,
  },
  {
    caseName: '비상 근무자의 닉네임이 최대 5자를 초과하는 경우',
    inputs: [
      '준팍,도밥,고니,수아,루루,글로,수아리리리리',
      '준팍바바라바바,도밥,고니,수아,루루,글로, 지예',
    ],
    errorMessage: ERROR_MESSAGE.workerNameLengthOverMax,
  },
];

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  ({ inputs, errorMessage }) => {
    inputs.forEach((input) => {
      expect(() => new Shift(input)).toThrow(errorMessage);
    });
  },
);
