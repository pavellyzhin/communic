class Meta extends Property{

    #__title = null;
    #_keywords = [];
    #_description = null;

    constructor(){
        super();
        this.setId(1);
        this.setTitle('Мета');
        this.setName('meta');
    }

    set_Title(title){
        if(typeof title !== 'string'){
            throw new Error('В качестве заголовка должна использоваться строка String');
        }

        this.#__title = title;
    }

    get_Title(){
        return this.#__title;
    }

    setKeyword(keyword){
        if(typeof keyword !== 'string'){
            throw new Error('В качестве ключевого слова должна быть указана строка(String)');
        }

        this.#_keywords.push(keyword);
    }

    setKeywords(keywords){
        if(!(keywords instanceof Array)){
            throw new Error('В качестве списка ключевых слов должен передаваться массив(Array)');
        }

        keywords.forEach(item=>this.setKeyword(item));
    }

    getKeywordsString(){
        return this.#_keywords.join(', ');
    }

    setDescription(description){
        if(typeof description !== 'string'){
            throw new Error('В качестве описания должна указываться строка (String)');
        }
    }

    getDescription(){
        return this.#_description;
    }
}