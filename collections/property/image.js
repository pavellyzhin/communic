class ImageProp extends Property {

    #_image = new Image();
    #_images = [];

    constructor(){
        super();
        this.setId(3);
        this.setTitle('Изображение');
        this.setName('image');
    }

    setImage(image){
        if(!(image instanceof Image)){
            throw new Error('Изобраежние должно относиться к классу Image');
        }

        this.#_images.push(image);
    }

    getImages(){
        return this.#_images;
    }

    clear(){
        this.#_images = [];
    }
}