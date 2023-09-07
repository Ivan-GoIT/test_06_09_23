/**
 * Сравнивает два объекта на глубокое равенство.
 *
 * @param {Object} obj1 - Первый объект для сравнения.
 * @param {Object} obj2 - Второй объект для сравнения.
 * @returns {boolean} Возвращает true, если объекты равны, и false в противном случае.
 */
function deepEqual_2(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const [keys1, keys2] = [Object.keys(obj1), Object.keys(obj2)];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual_2(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

/**
 * Bозвращает итератор возвращающий части массива указанной длинны.
 *
 * @param {Array} arr - массив.
 * @param {Object} length - Второй объект для сравнения.
 * @returns {boolean} Возвращает true, если объекты равны, и false в противном случае.
 */

function* chunkArray(arr, chunkLength) {
  for (let index = 0; index < arr.length; index += chunkLength) {
    yield arr.slice(index, index + chunkLength);
  }
}

const f1 = cb => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

/**
 * Выполняет массив функций асинхронно и возвращает promise, который разрешается,
 * когда все функции завершатся.
 *
 * @param {Array<[Function, Array]>} functionsAndArgs - Массив пар, каждая из которых
 *   содержит функцию и массив аргументов для выполнения этой функции.
 * @returns {Promise<Array>} Promise, которое разрешается массивом результатов выполнения функций.
 */
function bulkRun(functionsAndArgs) {
  const promises = functionsAndArgs.map(([fn, args]) => {
    return new Promise(res => {
      fn(...args, result => {
        res(result);
      });
    });
  });

  return Promise.all(promises);
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
