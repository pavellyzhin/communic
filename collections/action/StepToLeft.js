class StepToLeft extends Step {

    constructor(){
        super();
    }

    action(element){
        let coordinate = element.properties.get('coordinate');
        coordinate.setX(coordinate.getX() - this.getStep()); // паеремещаем объект по координатам 
    }
}