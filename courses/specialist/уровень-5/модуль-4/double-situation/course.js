function Course () {
    this.getTitle = function () {
      console.log('Node.js');
    };
}

exports.Course = Course; // тоже самое что module.exports....