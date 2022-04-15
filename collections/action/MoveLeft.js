class MoveLeft extends Move {

    startX = null;

    constructor(){
        super();
        this.setId(1);
        this.setTitle('Движение влево');
        this.setName('moveLeft');
        this.setDistance(100);
    }

    action(element){
        // если осуществляется движение влево, значит есть координаты
        
        this.startX = element.properties.get('coordinate').getX();

        let handler = function() {
            
            let coordinate = element.properties.get('coordinate');

            if(coordinate.getX() <= this.startX - this.getDistance()) {
            
                clearInterval(this.getInterval());
                // суть в том, что по завершении этого действия
                /*
                    да вообще по завершении любого действия
                    мы возвращаемся в ActionRoute и снова обращаемся к ActionList
                    я может просто создаю неправильную структуру
                */
            } else {
                coordinate.setX(coordinate.getX() - this.getStep()); // перемещаем элемент по координатам влево
            }
        };

        this.set_Interval(setInterval(handler.bind(this),200));
    }
}