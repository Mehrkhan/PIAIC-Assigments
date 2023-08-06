function makeCar(manufacturer, model, options) {
    var car = { manufacturer: manufacturer, model: model };
    if (options) {
        for (var key in options) {
            car[key] = options[key];
        }
    }
    return car;
}
var cars = makeCar('Toyota', 'Camry', { color: 'red', year: 2020 });
console.log(car);
