// Function to create a car object
function createCar(manufacturer: string, model: string, ...rest: [string, unknown][]) {
    const car: { [key: string]: unknown } = { manufacturer, model };
  
    // Add optional properties from rest arguments
    for (const [key, value] of rest) {
      car[key] = value;
    }
  
    return car;
  }
  
  // Create car objects with different optional properties
  const car1 = createCar("Toyota", "Camry", color="red");
  const car2 = createCar("Honda", "Civic", sunroof=true);
  const car3 = createCar("Ford", "Mustang", engine="V8", wheels=4);
  
  // Print the car information objects
  console.log(car1);
  console.log(car2);
  console.log(car3);
  