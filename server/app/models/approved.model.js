module.exports = (sequelize, Sequelize)=>{
	const Approved = sequelize.define('approved', {
		name: {
			type: Sequelize.STRING
		},
		date0: {
			type: Sequelize.STRING
		},
		date1: {
			type: Sequelize.INTEGER
		},
		place: {
			type: Sequelize.STRING
		},
		reason: {
			type: Sequelize.STRING
		}
	},
	{
			tableName: 'approved'
	});
	return Approved;
}
