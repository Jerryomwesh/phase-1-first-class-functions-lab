// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to multiply fares
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};

// Export functions for testing
module.exports = { 
  returnFirstTwoDrivers, 
  returnLastTwoDrivers, 
  selectingDrivers, 
  createFareMultiplier, 
  fareDoubler, 
  fareTripler, 
  selectDifferentDrivers 
};
