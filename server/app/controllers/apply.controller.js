const db = require("../models");
const { QueryTypes } = require('sequelize');
const Msg = db.msg;
const Basic = db.basic;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.createMsg = (req, res) => {
  // Validate request
	const id = req.params.userID;
//  if (!req.body.userID) {
//    res.status(400).send({
//      message: "Content can not be empty!"
//    });
//    return;
//  }

  // Create a Msg 
  const msg = {
		fk_basic: id,
		date0: req.body.date0,
		date1: req.body.date1,
		place: req.body.place,
		reason: req.body.reason,
		state: req.body.state
  };

  // Save Msg in the database
  Msg.create(msg)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllApproved = (req, res) => {
	db.sequelize.query('SELECT * FROM approved;', { type: QueryTypes.SELECT })
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

// Retrieve all Tutorials from the database.
exports.findMsgByUserID= (req, res) => {
	const id = req.params.userID;
	uid=[id];
	db.sequelize.query('SELECT * FROM all_msg WHERE fk_basic=?;', {
		type: QueryTypes.SELECT,
		replacements: uid
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

// Retrieve all Tutorials from the database.
exports.findBasicByUserID= (req, res) => {
	const id = req.params.userID;
	db.sequelize.query('SELECT * FROM basics WHERE id=?;', {
		type: QueryTypes.SELECT,
		replacements: [id]
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


// Update a Msg with an id
exports.updateMsg = (req, res) => {
  const id = req.params.id;

  Msg.update(req.body, {
		where: {id: id}
	})
    .then(num => {
			if (num==1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
			}
		})
		.catch(err=>{
			res.status(500).send({
				mseeage: 'Error updating Msg with id='+id
			});
		});
};

// Update Basic by the id in the request
exports.updateBasic = (req, res) => {
  const id = req.params.userID;

  Basic.update(req.body, {
    where: { id: id}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


