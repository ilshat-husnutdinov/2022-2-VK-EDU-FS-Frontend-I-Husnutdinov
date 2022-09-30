/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here
    if (typeof(bytes) !== 'number' || bytes<0){
      return false;
    }
    let kilobyte = 1024;
    let result = bytes;
    let count = 0;
    while ((result >= kilobyte) && (count != 4)) {
      count++;
      result = result/kilobyte;
    }
    
    switch (count) {
      case 0:
        result = parseFloat(result.toFixed(2)) + ' B';
        break;
      case 1:
        result = parseFloat(result.toFixed(2)) + ' KB';
        break;
      case 2:
        result = parseFloat(result.toFixed(2)) + ' MB';
        break;
      case 3:
        result = parseFloat(result.toFixed(2)) + ' GB';
        break;
      default:
        result = parseFloat(result.toFixed(2)) + ' TB';
        break;
    }

    return result;
}
