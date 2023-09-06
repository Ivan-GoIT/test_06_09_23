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
 * Сравнивает два объекта на глубокое равенство.
 *
 * @param {Object} obj1 - Первый объект для сравнения.
 * @param {Object} obj2 - Второй объект для сравнения.
 * @returns {boolean} Возвращает true, если объекты равны, и false в противном случае.
 */
const deepEqual_2 = (obj1, obj2) => {

    if(typeof obj1!==typeof obj2)return false
  
};

console.log(deepEqual_2({ name: 'test' }, { name: 'test' })); // output true
console.log(deepEqual_2({ name: 'test' }, { name: 'test1' })); // output false
console.log(
  deepEqual_2({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })
); // output false
console.log(deepEqual_2({ name: 'test' }, { name: 'test', age: 10 })); // false