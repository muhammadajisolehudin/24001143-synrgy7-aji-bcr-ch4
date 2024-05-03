class App {
    constructor() {
        this.carContainerElement = document.getElementById("cars-container");
        this.initEventListeners(); // Initialize event listeners upon creation
    }

    initEventListeners() {
        document.getElementById('form').addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    async init() {
        await this.loadAllCars(); // Initially load all cars
    }

    async loadAllCars() {
        const response = await fetch('http://localhost:8000/cars');
        const cars = await response.json();
        Car.init(cars);
        this.displayCars();
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const driverType = document.getElementById('driverType').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const passengerCount = document.getElementById('passenger').value;

        const dateTime = new Date(`${date}T${time}`);
        const startDate = dateTime.toISOString();

        const url = `http://localhost:8000/cars/filter?type=${driverType}&startDate=${startDate}&rentalDurationDays=${time}&passengerCount=${passengerCount}`;

        try {
            const response = await fetch(url);
            const cars = await response.json();
            this.displayCars(cars);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch filtered car data');
        }
    }

    displayCars(cars = Car.list) {
        this.clear();
        cars.forEach(car => {
            const node = document.createElement("div");
            node.className = 'car-item';
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    }

    clear() {
        while (this.carContainerElement.firstChild) {
            this.carContainerElement.removeChild(this.carContainerElement.firstChild);
        }
    }
}
