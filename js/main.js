/////////////////////// Task 1 Medium ///////////////////////////////////////////////

class Language {

     #code = 'any';
     #name = 'any';
     #rtl =  false;
     #defaults = false;

    constructor ({code, name, rtl, defaults}) {
        this.#code = code;
        this.#name = name;
        this.#rtl = rtl;
        this.#defaults = defaults;
    }

    get getCode () {
        return this.#code
    }

    get getName () {
        return this.#name
    }

    get getRtl () {
        return this.#rtl
    }

    get getDefaults () {
        return this.#defaults
    }
}

const language1 = new Language({code: 'en', name: 'English', rtl: false, defaults: true});
const language2 = new Language({code: 'fr', name: 'France', rtl: false, defaults: true});

console.log(language1.getCode, language1.getName, language1.getRtl, language1.getDefaults);
console.log(language2.getCode, language2.getName, language2.getRtl, language2.getDefaults);






