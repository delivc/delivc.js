export default function createGlobalOptions (globalSettings: Object) {
    return function getGloblaOptions (query: Object) {
        return Object.assign({}, globalSettings, query)
    }
}