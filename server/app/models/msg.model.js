module.exports = (sequelize, Sequelize)=>{
	const Msg = sequelize.define('msg', {
		fk_basic: {
			type: Sequelize.INTEGER
		},
		date0: {
			type: Sequelize.DATEONLY
		},
		date1: {
			type: Sequelize.DATEONLY
		},
		place: {
			type: Sequelize.STRING
		},
		reason: {
			type: Sequelize.STRING
		},
		a1: {
			type: Sequelize.DATE
		},
		d1: {
			type: Sequelize.DATE
		},
		c1: {
			type: Sequelize.STRING
		},
		a2: {
			type: Sequelize.DATE
		},
		d2: {
			type: Sequelize.DATE
		},
		c2: {
			type: Sequelize.STRING
		},
		a3: {
			type: Sequelize.DATE
		},
		d3: {
			type: Sequelize.DATE
		},
		c3: {
			type: Sequelize.STRING
		},
		state: {
			type: Sequelize.INTEGER
		}
	},{
		//timestamps: false
	});
	return Msg;
}
