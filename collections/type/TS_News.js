class News extends TypeShort {

    constructor(){
        super();
        this.entity.setId(1);
        this.entity.setTitle('Новость');
        this.entity.setName('news');
    }

    init(){
        this.childTypes.setParent(1);
        
        this.typeProperties.setType(1);
        this.typeProperties.setProperty(1);
    }
}