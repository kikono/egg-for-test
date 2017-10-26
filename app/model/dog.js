module.exports = (app,model) =>{
	const {STRING,INTEGER,DATE,BOOLEAN,DECIMAL} = app.Sequelize;
	return app.model.define('dog',{
		id:{type:INTEGER(11),primaryKey: true},
		typeId:INTEGER(11),
		typeName:STRING(56),
		pictureUrl:STRING(56),
		introduction:STRING(110),
		price:DECIMAL(10)
	})
}