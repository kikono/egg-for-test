'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
	enable:true,
	package:"egg-mysql",
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.sequelize = {
	enable:true,
	package:'egg-sequelize',
}




// module.exports = {
// 	mysql:{

// 	},

// 	cors:{

// 	},


// }