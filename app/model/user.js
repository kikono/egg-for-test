
module.exports = (app,model) =>{
	const {STRING,INTEGER,DATE,BOOLEAN} = app.Sequelize;
	return app.model.define('user',{
		name: STRING(45),
    	tel: STRING(45),
    	email: STRING(45),
    	sex: INTEGER(2),
	})
}