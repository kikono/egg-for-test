
module.exports =  (options)  => {
	return function* (next){
		// console.info('request--------------------'+JSON.stringify(this.request));
		const token = this.request.token ;// extend/request.js 扩展
		this.app.logger.info("[auth] token :"+token);
		yield next;

	};
};
