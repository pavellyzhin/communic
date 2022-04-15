class EF_Tiger extends ElementFull{

    constructor(){
        super();
    }

    init(){
        this.type = new TS_Tiger();
        this.entity.setType(this.type.entity.getId());
    }
}