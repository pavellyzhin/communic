class TypeProperties {

    #_type       = null;
    #_properties = [];

    constructor(){

    }

    setType(type){
        if(typeof type !== 'string'){
            throw new Error('В качестве типа свойства может быть указано только число(ID типа)');
        }

        this.#_type = type;
    }

    getType(){
        return this.#_type;
    }

    setProperty(property){
        if(typeof property !== 'number'){
            throw new Error('в качестве свойства типа может быть установлено только число(ID свойства)');
        }

        if(!this.#_properties.find(item => item == property)){
            this.#_properties.push(property);
        }
    }

    getProperties(){
        return this.#_properties;
    }

    clear(){
        this.#_type = null;
        this.#_properties = [];
    }
}