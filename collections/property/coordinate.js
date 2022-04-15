class Coordinate extends Property {

    #_x = null;
    #_y = null;
    #_z = null;

    constructor(){
        super();
        this.setId(2);
        this.setTitle('Координаты');
        this.setName('coordinate');
    }

    setX(x){
        if(typeof x !== 'number'){
            throw new Error('В качестве координаты X должна быть указано число(Number)');
        }

        this.#_x = x;
    }

    getX(){
        return this.#_x;
    }

    setY(y){
        if(typeof y !== 'number') {
            throw new Error('В качестве координаты Y должно быть указано число(Number)');
        }

        this.#_y = y;
    }

    getY(){
        return this.#_y;
    }

    setZ(z){
        if(typeof z !== 'number'){
            throw new Error('В качестве координаты Y должно быть указано число (Number)');
        }

        this.#_z = z;
    }

    getZ(){
        return this.#_z;
    }

    setCoordinate([x=0,y=0,z=0]){
        this.setX(x);
        this.setY(y);
        this.setZ(z);
    }

    getCoordinate(){
        return [this.#_x,this.#_y,this.#_z];
    }

    clear(){
        this.#_x = null;
        this.#_y = null;
        this.#_z = null;
    }
}