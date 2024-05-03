class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="flex flex-col gap-5 border border-gray-300 rounded-lg p-5 shadow-sm">
        <img src="./${this.image}" alt="car" class="w-full h-48 object-cover rounded-lg pb-5" />
        <div class="flex flex-col gap-4 h-[250px]">
          <p class="text-dark text-sm">Tipe Mobil</p>
          <p class="text-dark text-md font-bold">Rp. ${this.rentPerDay}/hari</p>
          <p class="text-dark text-sm overflow-auto">
            ${this.description}
          </p>
          <div class="flex gap-3">
              <img src="./assets/img/fi_user.jpg" alt="icon-user" />
              <p class="text-dark text-sm">${this.capacity} Penumpang</p>
          </div>
          <div class="flex gap-3">
              <img src="./assets/img/fi_setting.jpg" alt="icon-settings" />
              <p class="text-dark text-sm">${this.transmission}</p>
          </div>
          <div class="flex gap-3">
              <img src="./assets/img/fi_calendar.jpg" alt="icon-calendar" />
              <p class="text-dark text-sm">${this.year}</p>
          </div>
        </div>
        <a href="#" class="text-center bg-[#5CB85F] text-white py-3 disabled:opacity-50 rounded-[2px]">Sewa Sekarang</a>
      </div>
    `;
  }
}
