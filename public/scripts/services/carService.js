const { Binar, getRandomInt } = require('../binar.js');

exports.getAllCars = async () => {
   try {
     const data = await Binar.listCars();
     return data;
   } catch (error) {
    console.log(error)
   }
};



exports.getCarsByFilter = async (type, startDate, rentalDurationDays, passengerCount) => {
  try {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + rentalDurationDays);

    // Define a filter function based on provided criteria
    const filter = (car) => {
      return car.type === type &&
        new Date(car.availableAt) >= startDate &&
        new Date(car.availableAt) <= endDate &&
        car.capacity >= passengerCount &&
        car.available;
    };
    const filteredCars = await Binar.listCars(filter);
    return filteredCars;
  } catch (error) {
    console.error('Error in getCarsByFilter:', error);
    return [];  // Return an empty array on error
  }
};