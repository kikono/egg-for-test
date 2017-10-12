'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_jinzhi';

  // add your config here
  config.middleware = [];

  config.mysql = {
  	client:{
  		host:'127.0.0.1',
  		port:'3306',
  		user:'root',
  		password:'',
  		database:'hobby'
  	},
  	app:true,
  	agent:false,
  };


  config.sequelize = {
    dialect:'mysql',
    database:'hobby',
    host:'127.0.0.1',
    port:'3306',
    username:'root',
    password:'',
    // define: {
    //     timestamps: false,
    //     freezeTableName: true,
    //   },
  };

  config.security = {
  	// csrf:{
  	// 	ignoreJSON:true,
   //    bodyName: '_csrf',
      // headerName：'x-csrf-token',
  	// },
    csrf:false,   //关闭框架自带的安全处理？
  	domainWhiteList:['http://localhost:8080']
  }

  config.cors = {
  	allMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  	credentials:true
  }

  return config;
};
