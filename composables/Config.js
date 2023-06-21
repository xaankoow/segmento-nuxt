import Config from "../assets/Config/languages.json"

export default function __(key, lang = 'fa', detail = "words") {
    if (Config[lang] === undefined)
    {
        lang = 'fa'
    }
    if (Config[lang][detail] === undefined)
    {
        detail = 'words'
    }
    return Config[lang][detail][key] ?? 'undefined object';
}