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

/**
 * Преобразует массив в объект, используя элементы массива в качестве пар ключ-значение.
 * Если значение в паре является массивом, оно также будет преобразовано в объект рекурсивно.
 *
 * @param {Array} arr - Массив, содержащий пары ключ-значение для создания объекта.
 * @returns {Object} Созданный объект на основе элементов массива.
 */
function arrayToObject(arr) {
  return arr.reduce((obj, [key, val]) => {
    obj[key] = Array.isArray(val) ? arrayToObject(val) : val;
    return obj;
  }, {});
}

/**
 * Преобразует объект в массив, сохраняя структуру вложенных объектов.
 *
 * @param {Object} obj - Исходный объект, который нужно преобразовать в массив.
 * @returns {Array} Массив, содержащий пары ключ-значение из объекта. Если значение
 *   в паре является объектом, оно также будет преобразовано в массив рекурсивно.
 */
function objectToArray(obj) {
  return Object.entries(obj).map(([key, val]) => {
    if (typeof val === 'object' && !Array.isArray(val)) {
      return [key, objectToArray(val)];
    }
    return [key, val];
  });
}

function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

/**
 * Умножает два числа надежно, пытаясь выполнить операцию несколько раз
 * в случае возникновения исключения NotificationException, но прекращает
 * выполнение и выбрасывает исключение ErrorException при других исключениях.
 *
 * @param {number} a - Первое число для умножения.
 * @param {number} b - Второе число для умножения.
 * @returns {number} Результат умножения a и b, если успешно.
 * @throws {ErrorException} Если возникает исключение типа ErrorException.
 */
function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (err) {
    switch (true) {
      case err instanceof NotificationException:
        return reliableMultiply(a, b);

      case err instanceof ErrorException:
        throw err;

      default:
        throw err;
    }
  }
}

// console.log(reliableMultiply(8, 8));

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
};


/**
 * Преобразует вложенный объект в плоскую карту с разделителями '/'.
 *
 * @param {Object} obj - Исходный объект для преобразования.
 * @returns {Object} Плоская карта с разделителями '/'.
 */
function mapObject(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
      const nestedObj = mapObject(val);
      Object.keys(nestedObj).forEach(nestedObjKey => {
        acc[`${key}/${nestedObjKey}`] = nestedObj[nestedObjKey];
      });
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
console.log(mapObject(obj));


