const carService = require('../services/carService');


exports.getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(cars));
  } catch (error) {
    
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};


exports.getAllCarsByFilter = async (req, res, query) => {
  try {
    // console.log("getAllCarsByFilter is called");
    // console.log(req.query);
    const { type, startDate, rentalDurationDays, passengerCount } = query;
     
    const filteredCars = await carService.getCarsByFilter(
      type,
      new Date(startDate),
      parseInt(rentalDurationDays),
      parseInt(passengerCount)
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filteredCars));
  } catch (error) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};