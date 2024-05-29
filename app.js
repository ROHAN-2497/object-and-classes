const employee = {
  calTex() {
    console.log("text reate is 10%");
  },
};

const rajon = {
  salary: 50000,
};

rajon.__proto__ = employee;
