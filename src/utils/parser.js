

const stringToNumber = (string) => {
  return Number(string);
}

/**
 * 
 * @param {string} string 
 * @returns {Array<string>}
 */
const stringToArray = (string) => {
  return string.split(',').map((element) => element.trim());
}

/**
 * 문자열 배열에 빈 값이 있는 경우 삭제한다.
 * @param {Array<string>} strArray 
 * @returns {Array<string>}
 */
const deleteEmptyValue = (strArray) => {
  return strArray.filter((element) => element !== '');
}

const parser = {
  stringToNumber,
  stringToArray,
  deleteEmptyValue,
}

export default parser;
