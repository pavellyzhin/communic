class ELement {

    #_id   = null;
    #_hook = null;
    #_type = null;

    constructor(){

    }

    setType(type){
        if(!(type instanceof Number)){
            throw new Error('В качестве значения типа сущности элемента можно указать только цифру Number');
        }

        this.#_type = type;
    }

    getType(){
        return this.#_type;
    }


    setId(id){
        if(typeof id !== 'number'){
            throw new Error('В качестве Id эелмента может быть установлено только число  Number');
        }

        this.#_id = id;
    }

    getId(){
        return this.#_id;
    }

    setHook(hook){
        if(typeof hook !== 'number'){
            throw new Error('В качестве родителя элемента(Hook) может быть указано только число(Number)');
        }

        this.#_hook = hook;
    }

    getHook(){
        return this.#_hook;
    }
}