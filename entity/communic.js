class Communic {

    #_id      = null;
    #_element = null;
    #_target  = null;
    #_pattern = null;
    #_type    = null;

    constructor(){

    }

    setId(id){
        if(typeof id !== 'number' ){
            throw new Error('В качестве ID взаимодействия(communic) можно указать только число');
        }

        this.#_id = id;
    }

    getId(){
        return this.#_id;
    }

    setElement(element){
        if(typeof element !== 'number'){
            throw new Error('В качестве Элемента взаимодействия может быть указано только число(ID элемента)');
        }

        this.#_element = element;
    }

    getElement(){
        return this.#_element;
    }

    setTarget(target){
        if(typeof target !== 'number'){
            throw new Error('В качестве цели взаимодействия может быть указано только число (ID элемента-цели)');
        }

        this.#_target = target;
    }

    getTarget(){
        return this.#_target;
    }

    setPattern(pattern){
        if(typeof pattern !== 'number'){
            throw new Error('В качестве шаблона взаимодействия может быть указано только число (ID шаблона)');
        }

        this.#_pattern = pattern;
    }

    getPattern(){
        return this.#_pattern;
    }

    setType(type){
        if(typeof type !== 'number'){
            throw new Error('В качестве типа взаимодействия может быть установлено только число (ID типа взаимодействия)');
        }

        this.#_type = type;
    }

    getType(){
        return this.#_type;
    }
}