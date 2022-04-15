class ChildType {

    #_parent = null;
    #_childs = [];

    constructor(){

    }

    setParent(parent){
        if(typeof parent !== 'number'){
            throw new Error('В качестве родителя типа может быть установлено только число Number');
        }

        this.#_parent = parent;
    }

    getParent(){
        return this.#_parent;
    }

    setChild(child){
        if(typeof child !== 'number'){
            throw new Error('В качестве дочернего типа может быть указано только число(ID типа)');
        } 
        
        if(!this.#_childs.find(item => item == child)){ // если такой дочерний тип уже был установлен
            this.#_childs.push(child);
        }
    }

    getChilds(){
        return this.#_childs;
    }

}