class Step extends Action {

    #_step = 1; // px

    constructor(){
        super();

    }

    setStep(step){
        if(typeof step !== 'number'){
            throw new Error('В качестве шага(step) должно быть указано число(Number)');
        }

        this.#_step = step;
    }

    getStep(){
        return this.#_step;
    }
}