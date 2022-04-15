class Move extends Action {

    #_distance = null;
    #_interval = null;
    #_step = null; 
    


    constructor(){
        super();
    }

    setDistance(distance){
        if(typeof distance !== 'number'){
            throw new Error('В качестве дистанции для перемещения нужно указывать число(Number)');
        }

        this.#_distance = distance;
    }

    getDistance(){
        return this.#_distance;
    }

    set_Interval(interval){
        this.#_interval = interval;
    }

    getInterval(){
        return this.#_interval;
    }

    setStep(step){
        if(typeof step !=='number'){
            throw new Error('В качестве шага перемещения(step) нужно указывать число(Number)');
        }

        this.#_step = step;

    }

    getStep(){
        return this.#_step;
    }
}