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


