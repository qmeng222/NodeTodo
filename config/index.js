var configValues = require("./config");

module.exports = {
  getDbConnectionString: function () {
    // return "YOUR_MONGO_URL";
    return (
      "mongodb://" +
      configValues.uname +
      ":" +
      configValues.pwd +
      "@ac-swybkbk-shard-00-00.7zyfekp.mongodb.net:27017,ac-swybkbk-shard-00-01.7zyfekp.mongodb.net:27017,ac-swybkbk-shard-00-02.7zyfekp.mongodb.net:27017/?ssl=true&replicaSet=atlas-w87pu2-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
  },
};
