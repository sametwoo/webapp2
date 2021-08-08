module.exports = (sequelize, Sequelize)=>{
	const Units = sequelize.define('units', {
		unit: {
			type: Sequelize.STRING
		},
		fk_basic: {
			type: Sequelize.INTEGER
		}
	});
	return Units;
}
