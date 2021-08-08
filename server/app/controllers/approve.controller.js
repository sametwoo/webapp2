const db = require("../models");
const { QueryTypes } = require('sequelize');
const Msg = db.msg;
const Basic = db.basic;
const Op = db.Sequelize.Op;

// Retrieve all Msg from the database.
exports.findMsgByRole= (req, res) => {
	const role = req.params.role;
	db.sequelize.query('SELECT * FROM all_msg WHERE state=?;', {
		type: QueryTypes.SELECT,
		replacements:[role]
	})
	.then(data=>{
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while Fetch the Approved."
		});
	});
};

exports.findMsgByRoleAndUnit = (req, res) => {
	const role = req.params.role;
	const unit = req.params.unit;
	db.sequelize.query('SELECT * FROM all_msg WHERE state=? AND fk_unit=?;', {
		type: QueryTypes.SELECT,
		replacements:[role, unit]
	})
	.then(data=>{
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Some error occurred while Fetch the Approved."
		});
	});
};


exports.updateMsgToPass = (req, res) => {
	const id=req.params.userID;

  if (!req.body.role) {
    res.status(400).send({
      message: "Role can not be empty!"
    });
    return;
  }

  // Create a Msg 
  msg = {};
	role=req.body.role;
	if(role==1) {
		msg.a1=Date.now();
		msg.state=2;
	}
	else if(role==2) {
		msg.a2=Date.now();
		msg.state=3;
	}
	else if(role==3) {
		msg.a3=Date.now();
		msg.state=4;
	}

  // Save Msg in the database
  Msg.update(msg, {
			where: {fk_basic: id}
		})
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pass msg was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pass Msg with id=${id}. Maybe role was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating pass msg with id=" + id
      });
    });
}

exports.updateMsgToDeny = (req, res) => {
	const id=req.params.userID;

  if (!req.body.role) {
    res.status(400).send({
      message: "Role can not be empty!"
    });
    return;
  }

  // Create a Msg 
  msg = {};
	role=req.body.role;
	comment=req.body.comment;
	if(role==1) {
		msg.d1=Date.now();
		msg.c1=comment;
		msg.state=0;
	}
	else if(role==2) {
		msg.d2=Date.now();
		msg.c2=comment;
		msg.state=1;
	}
	else if(role==3) {
		msg.d3=Date.now();
		msg.c3=comment;
		msg.state=2;
	}

  // Save Msg in the database
  Msg.update(msg, {
			where: {fk_basic: id}
		})
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Deny msg was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Msg with id=${id}. Maybe deny msg was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating deny msg with id=" + id
      });
    });
}
