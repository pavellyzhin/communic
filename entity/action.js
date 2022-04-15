﻿class Action {

    #_id    = null;
    #_title = null;
    #_name  = null;    

    constructor(){

    }

    setId(id){
        if(typeof id !== 'number'){
            throw new Error('В качестве ID действия может быть указано только число');
        }
        this.#_id = id;
    }

    getId(){
        return this.#_id;
    }

    setTitle(title){
        if(typeof title !== 'string'){
            throw new Error('В качестве заголовка действия может быть использована только строка');
        }

        this.#_title = title;
    }

    getTitle(){
        return this.#_title;
    }

    setName(name){
        if(typeof name !== 'string'){
            throw new Error('В качестве имени действия может быть указана только строка');
        }
        this.#_name = name;
    }

    getName(){
        return this.#_name;
    }
}