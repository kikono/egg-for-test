'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
    }
      // this.ctx.body = 'hi, egg';

    * find(ctx){
        console.log(ctx)
    	const id = 2;
    	const user = yield ctx.service.home.find(id);
    	ctx.body = user;
    }

    * find2(ctx){
    	const ids = [1,3];
    	const user2 = yield ctx.service.home.find2(ids);
    	ctx.body = user2;
    }

    *findAll(){
    	const allDogs = yield this.ctx.service.home.findAll();
    	this.ctx.body = allDogs;
    }

    * create(ctx){
    	const params = {
    		typeId:ctx.request.body['typeId']?ctx.request.body['typeId']:null,
    		typeName:ctx.request.body['typeName'],
    		pictureUrl:ctx.request.body['pictureUrl'],
    		introduction:ctx.request.body['introduction'],
    		price:ctx.request.body['price']
    	}

    	const param = {
    		typeId:23,
    		typeName:'是个好人'
    	}
        console.log(params);
        let result = yield ctx.service.home.create(params);
        this.ctx.body = result;

    	// this.ctx.body = params;
    	// this.ctx.body = 'fighting RNG WE EDG';
    }

    * king(){
    	this.ctx.body = 'nihao';
    }

    * create2 (){
        var params = {
            typeId:26,
            typeName:'乡村田园犬',
            pictureUrl:null,
            introduction:'一个很帅的boy',
            price:1234
        }

        let result = yield this.ctx.service.home.create2(params);
        this.ctx.body = result;
    }

    * delete(){
        const id = 11;
        let result = yield this.ctx.service.home.delete(id);
        this.ctx.body = result;
    }

    * update(){
        const params = {
            id:10,
            typeName:'大黄',
            introduction:'他应该是个暖男'
        }

        const result = yield this.ctx.service.home.update(params);
        this.ctx.body = result;
    }

    * findNew(){
        const result = yield this.ctx.service.home.findNew();
        this.ctx.body = result;
    }
  }
  return HomeController;
};


















