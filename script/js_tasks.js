/**
 * Сравнивает два объекта.
 * Этот метод не учитывает все возможные случаи сравнения объектов, такие как функции, регулярные выражения и некоторые специфичные для JavaScript типы данных.
 *
 * @param {Object} obj1 - Первый объект для сравнения.
 * @param {Object} obj2 - Второй объект для сравнения.
 * @returns {boolean} Возвращает true, если объекты равны, и false в противном случае.
 */
const deepEqual_1 = (obj1, obj2) => {
  const str1 = JSON.stringify(obj1);
  const str2 = JSON.stringify(obj2);
  return str1 === str2;
};

/**
 * Сравнивает два примитива или объекта на глубокое равенство.
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