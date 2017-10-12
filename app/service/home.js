module.exports = app =>{
	class Home extends app.Service{
		* find (id){
			const user = yield app.mysql.get('dogs',{id:id});
			return user;
		}

		* find2 (ids){
			const user2 = yield app.mysql.get('dogs',{id:{$in:ids}});
			return user2;
		}

		* findAll(){
			const allInfo = yield app.mysql.select('dogs');
			let data = {
				status:200,
				list:allInfo
			};
			return data;
		}

		* create(params){
			const result = yield app.mysql.insert('dogs',params);
			result.status = 200;
			console.log(result);
			return result;
		}

		* create2(params){
			const result = yield app.mysql.insert('dogs',params);
			result.status = 200;
			console.log(result);
			return result;
		}

		* delete(id){
			const data = yield app.mysql.delete('dogs',{id:id});
			data.status = 200;
			data.name = 'jinzhi';
			return data;
		}

		* update(params){
			let result = this.app.mysql.update('dogs',params);
			result.status = 200;
			result.function = 'update';

			return result;
		}

		*findNew(){
			// const modelUser = this.app.model.User;
			let params = {
				name:'jinzhi',
				tel:'1312565454',
				email:'jzsamias@163.com',
				sex:2
			}
			const data = yield this.ctx.model.User.create(params);
			// const data = yield this.ctx.model.User.findAll();		//查找所有的数据
			// const data = yield this.ctx.mdel.User.count();			//查找所有数据的总条数
			// const data = yield this.ctx.model.User.findById(this.params.id)			//按id去查询想要的信息
			return data;
		}
	}
	return Home;
} 