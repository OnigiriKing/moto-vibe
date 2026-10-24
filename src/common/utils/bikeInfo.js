import hondaBike from "img/bikes/Honda.png";
import chetakBike from "img/bikes/Chetak.png";
import symBike from "img/bikes/Sym.png";
import yadeaBike from "img/bikes/Yadea.png";
import yamahaBike from "img/bikes/Yamaha.png";

const bikeInfo = {
  Honda: {
    price: "10",
    model: "150i",
    name: "Honda Click",
    deposit: "$100",
    gearbox: "Automatic",
    capacity: "5.5 L",
    capacityLabel: "Tank",
    weight: "107 kg",
    img: hondaBike,
  },
  Chetak: {
    price: "12",
    model: "Smart",
    name: "Chetak Smart",
    deposit: "$100",
    gearbox: "Automatic",
    capacity: "60 Ah",
    capacityLabel: "Battery",
    weight: "100 kg",
    img: chetakBike,
  },
  Sym: {
    price: "8",
    model: "Symphony",
    name: "Scooter Sym",
    deposit: "$100",
    gearbox: "Automatic",
    capacity: "5.4 L",
    capacityLabel: "Tank",
    weight: "123 kg",
    img: symBike,
  },
  Yadea: {
    price: "15",
    model: "G5S",
    name: "Yadea G5S",
    deposit: "$150",
    gearbox: "Automatic",
    capacity: "50 Ah",
    capacityLabel: "Battery",
    weight: "81 kg",
    img: yadeaBike,
  },
  Yamaha: {
    price: "12",
    model: "Fazzio",
    name: "Yamaha Fazzio",
    deposit: "$120",
    gearbox: "Automatic",
    capacity: "5.1 L",
    capacityLabel: "Tank",
    weight: "125 kg",
    img: yamahaBike,
  },
};

export default bikeInfo;
