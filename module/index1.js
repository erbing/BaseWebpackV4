let a = 123;

const getSome = () => {
  console.log("yyy");
};

const getA = () => {
  console.log(a);
};

exports.getSome = getSome;

module.exports = getA;
