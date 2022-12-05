const memoize = (fn) => {
    const cache = {};
    console.log('cache', cache);
    return function(param) {
        console.log('param', param);
        if (cache[param]) {
            return cache[param];
        } else {
            const result = fn(param);
            cache[param] = result;
            return result;
        }
    };
};

const toUpper = (str = '') => str.toUpperCase();
const toUpperMemoized = memoize(toUpper);
toUpperMemoized('Alex');
toUpperMemoized('Alex');
toUpperMemoized('Max');


const calculateVolumeAndArea = (num) => {
    if (typeof num === 'number' || Number.isInteger(num) || num < 0) {
        const volumeCube = num * num * num;
    const square = 6 * (num * num);
    return `Объем куба: ${volumeCube}, площадь всей поверхности: ${square}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
};
calculateVolumeAndArea(5);