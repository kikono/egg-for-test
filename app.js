
module.exports = app =>{

	const modelPath = app.config.baseDir+'/app/model';

	// 通过context形式加载，通过this.ctx.domain.name 获取
	// app.loader.loadToContext(modelPath, 'domain',{
	//       call: true,
	//   });

	app.beforeStart(function *(){
		yield app.model.sync({ force: false });
	})
}