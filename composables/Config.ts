import dictinary from "../assets/Config/languages.json"

export default class Config {
    private _lang = ''

    constructor(lang = 'fa') {
        this._lang = lang;
    }

    public __(key: any, data = null) {
        if (data === null) {
            data = dictinary[this._lang]
        }
        if (typeof key !== 'string') {
            let result = data
            key.forEach(item => {
                result = this.get_data(result, item)
            });

            return result
        }

        return this.get_data(data, key)
    }

    protected get_data(obj, key) {
        return obj[key] ?? 'undefined'
    }
}