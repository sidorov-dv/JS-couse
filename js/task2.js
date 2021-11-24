////////////////////////// Task 2 hard ////////////////////////////////////////////////

const languageData = [
    {
        code: 'en',
        name: 'English',
        rtl: false,
        defaults: true,
    },
    {
        code: 'ru',
        name: 'Russian',
        rtl: false,
        defaults: false,
    },
    {
        code: 'ar',
        name: 'Arabic',
        rtl: true,
        defaults: false,
    }
]

class Language {

    #code = 'any';
    #name = 'any';
    #rtl = false;
    #defaults = false;

    constructor({ code, name, rtl, defaults }) {
        this.#code = code;
        this.#name = name;
        this.#rtl = rtl;
        this.#defaults = defaults;
    }

    get getCode() {
        return this.#code
    }

    get getName() {
        return this.#name
    }

    get getRtl() {
        return this.#rtl
    }

    get getDefaults() {
        return this.#defaults
    }

    set setDefaults(value) {
        this.#defaults = Boolean(value)
    }

    static initObj() {
        return new this({ code: 'by', name: 'belarus', rtl: false, defaults: false })
    }

    static stringNameCompare (lang1, lang2) {
        if (lang1.getName > lang2.getName) {
            console.log(`${lang1.getName} > ${lang2.getName}`)
        } else if (lang1.getName < lang2.getName) {
            console.log(`${lang1.getName} < ${lang2.getName}`)
        } else {
            console.log(`${lang1.getName} = ${lang2.getName}`)
        }
    }
}

const langFromClass = Language.initObj();
console.log(langFromClass);
langFromClass.setDefaults = true;
console.log(langFromClass);

const languages = languageData.map((item) => new Language(item));
console.log(languages);

const filtDefaultFalse = languages.filter((item) => item.getDefaults === false)
                                  .forEach((item, index) => console.log(`Objects with default = false -> ${item.getName}, index - ${index}`));

const findRtlRight = languages.filter((item) => item.getRtl === true)
                              .forEach((item, index) => console.log(`Object(s) with rtl = true -> ${item.getName}, index - ${index}`));

Language.stringNameCompare(languages[0], languages[1]);