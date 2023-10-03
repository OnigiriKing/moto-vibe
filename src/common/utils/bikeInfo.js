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
    tank: "5.5 L",
    weight: "107 KG",
    img: hondaBike,
  },
  Chetak: {
    price: "12",
    model: "Smart",
    name: "Chetak Smart",
    deposit: "$100",
    gearbox: "Automatic",
    tank: "60 Ah",
    weight: "100KG",
    img: chetakBike,
  },
  Sym: {
    price: "8",
    model: "Symphony",
    name: "Scooter Sym",
    deposit: "$100",
    gearbox: "Automatic",
    tank: "5.4 L",
    weight: "123KG",
    img: symBike,
  },
  Yadea: {
    price: "15",
    model: "G5S ",
    name: "Yadea G5S",
    deposit: "$150",
    gearbox: "Automatic",
    tank: "50 Ah",
    weight: "81KG",
    img: yadeaBike,
  },
  Yamaha: {
    price: "12",
    model: "Fazzio",
    name: "Yamaha Fazzio",
    deposit: "$120",
    gearbox: "Automatic",
    tank: "5.1L",
    weight: "125KG",
    img: yamahaBike,
  },
};

export default bikeInfo;
