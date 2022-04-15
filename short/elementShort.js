class ELementSHort {

    entity       = new Element();
    type         = new Type();
    #_properties = Set();

    constructor(){

    }

    setProperty(key,value){

        if(typeof key !== 'string'){
            throw new Error('В качестве ключа свойства может быть указана только строка(Name свойства)');
        }

        if(!(value instanceof Property)){
            throw new Error('В качестве значения свойства типа может быть указан только объект унаследованный от Property или сам Property');
        }

        this.#_properties.set(key,value);
    }

    getProperty(key){
        return this.#_properties.get(key);
    }

    getProperties(){
        return this.#_properties;
    }
}