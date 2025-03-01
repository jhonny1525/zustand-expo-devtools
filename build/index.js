export let useZustandDevtools;
// @ts-ignore process.env.NODE_ENV is defined by metro transform plugins
if (process.env.NODE_ENV !== 'production') {
    useZustandDevtools = require('./useZustandDevtools').useZustandDevtools;
}
else {
    useZustandDevtools = () => { };
}
//# sourceMappingURL=index.js.map