'use strict'

module.exports = (app) =>{
	class DogsController extends app.Controller{
		* getDogs(ctx){

			let typeNmae = ctx.request.body.typeNmae;
			let param = {
				typeNmae:typeNmae
			}
			let data = yield ctx.service.dogs.getDogs(param);
			ctx.set({
				header:"Access-Control-Allow-Origin",
			})
			ctx.body = data;

		}

		* addDogs(ctx){
			let typeId = ctx.request.body.typeId;
			let typeName = ctx.request.body.typeName;
			let pictureUrl = ctx.request.body.pictureUrl;
			let introduction = ctx.request.body.introduction;
			let price = ctx.request.body.price;

			let params = {
				typeId:typeId,
				typeName:typeName,
				pictureUrl:pictureUrl,
				introduction:introduction,
				price:price
			}

			let data = yield ctx.service.dogs.addDogs(params);
			ctx.body = data;
		}

		* deleteDogs(ctx){

		}

		* updateDogs(ctx){

		}

		*batchAddDogs(ctx){
			
		}
	}

	return DogsController;
}