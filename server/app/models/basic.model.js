module.exports = (sequelize, Sequelize)=>{
	const Basic= sequelize.define('basic', {
		name: {
			type: Sequelize.STRING
		},
		workdate: {
			type: Sequelize.DATEONLY
		},
		count: {
			type: Sequelize.INTEGER
		},
		days: {
			type: Sequelize.INTEGER
		},
		used: {
			type: Sequelize.INTEGER
		},
		fk_unit: {
			type: Sequelize.INTEGER
		},
		grade: {
			type: Sequelize.STRING
		},
		phone0: {
			type: Sequelize.STRING
		},
		phone1: {
			type: Sequelize.STRING
		}
	});
	return Basic;
}
