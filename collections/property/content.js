class Content extends Property {

    #_content = null;

    constructor(){
        super();
        this.setId(4);
        this.setTitle('Контент');
        this.setName('content');
    }

    setContent(content){
        if(typeof content !== 'string'){
            throw new Error('В качестве контента должна указываться строка(String)');
        }

        this.#_content = content;
    }

    getContent(){
        return this.#_content;
    }

    clear(){
        this.#_content = null;
    }
}