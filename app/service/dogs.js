'use strict'

let sequelize = require('Sequelize');
module.exports = app =>{
	class DogsService extends app.Service{
		* getDogs(param){
			let where = 1;
			if(param.typeName){
				where += 'typeName = typeName'
			}

			let option = {
				attributes:[[sequelize.fn('COUNT',sequelize.col('id')),'idCount']]
			}
			let result = yield this.ctx.model.Dog.findAll();
			// let result = yield this.ctx.model.Dog.findById(where);
			return result;
		}

		* addDogs(params){
			let result = yield this.ctx.model.Dog.create(params);
			return result;

		}

		*batchAddDogs(){

		}

		* deleteDogs(){

		}

		* updateDogs(){

		}
	}

	return DogsService;
}