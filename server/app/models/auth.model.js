module.exports = (sequelize, Sequelize)=>{
	const Auth = sequelize.define('auth', {
		ip: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		fk_basic: {
			type: Sequelize.INTEGER
		}
	});
	return Auth;
}
