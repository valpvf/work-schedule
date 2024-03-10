const person = [
  {
    id: 1,
    positionId: 1,
    lastName: "Пузь",
    firstName: "Володимир",
    surname: "Григорович",
    dateBirthday: "17.05.1964",
    address: "12 квітня",
    tlf: "0505726473",
  },
  {
    id: 2,
    positionId: 2,
    lastName: "Межейко",
    firstName: "Ірина",
    surname: "Олександрівна",
    dateBirthday: "04.01.1974",
    address: "",
    tlf: "0962283221",
  },
  {
    id: 3,
    positionId: 3,
    lastName: "Бєлко",
    firstName: "Іван",
    surname: "Іванович",
    dateBirthday: "11.09.1985",
    address: "Василя Сергієнка, 14а, 49",
    tlf: "0982418062",
    tlf2: "0633605235",
  },
  {
    id: 6,
    positionId: 4,
    lastName: "Гузенко",
    firstName: "Сергій",
    surname: "Миколайович",
    dateBirthday: "22.06.1977",
    address: "Руставі, 7, 93",
    tlf: "0679614907",
    tlf2: "0639712821",
    out: "Війна",
  },
  {
    id: 9,
    positionId: 5,
    lastName: "Боровик",
    firstName: "Кирило",
    surname: "Володимирович",
    dateBirthday: "19.08.1999",
    address: "Будівельників, 15, 90",
    tlf: "0986742221",
    out: "Звільнено",
  },
];

const position = [
  {
    id: 1,
    position: "Начальник Служби безпеки",
  },
  {
    id: 2,
    position: "Аудитор",
  },
  {
    id: 3,
    position: "Інспектор",
  },
  {
    id: 4,
    position: "Ст. охоронник",
  },
  {
    id: 5,
    position: "Охоронник",
  },
];

module.exports = { person, position };
