module.exports = app => {
  const apply = require("../controllers/apply.controller.js");
	const approve = require('../controllers/approve.controller.js');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/apply/:userID", apply.createMsg);

  // Retrieve all Tutorials
  router.get("/approved/", apply.findAllApproved);

  router.get("/basic/:userID", apply.findBasicByUserID);

  // Retrieve all published Tutorials
  router.put("/user/:userID", apply.updateBasic);

  // Retrieve a single Tutorial with id
  router.put("/apply/:id", apply.updateMsg);

  // Update a Tutorial with id
  router.get("/apply/:userID", apply.findMsgByUserID);

	router.get('/check/:role', approve.findMsgByRole);

	router.get('/check/:role/:unit', approve.findMsgByRoleAndUnit);

	router.post('/pass/:userID', approve.updateMsgToPass);

	router.post('/deny/:userID', approve.updateMsgToDeny);

  app.use("/api", router);
};
