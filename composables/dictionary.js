import dictionary from "../assets/lang/languages.json"

export default function __(key, lang = 'fa', detail = "words") {
    if (dictionary[lang] === undefined)
    {
        lang = 'fa'
    }
    if (dictionary[lang][detail] === undefined)
    {
        detail = 'words'
    }
    return dictionary[lang][detail][key] ?? 'undefined object';
}