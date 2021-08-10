module.exports = app => {
  const apply = require("../controllers/apply.controller.js");
	const approve = require('../controllers/approve.controller.js');

  var router = require("express").Router();

  // Create a new Msg
  router.post("/apply/:userID", apply.createMsg);
  // Retrieve all Approved 
  router.get("/approved/", apply.findAllApproved);
	// Retrieve basic information for :userID
  router.get("/user/:userID", apply.findBasicByUserID);
  // Update basic information for userID
  router.put("/user/:userID", apply.updateBasic);
  // Update msg by msg id
  router.put("/apply/:id", apply.updateMsg);
  // Retrieve Msg for userID
  router.get("/apply/:userID", apply.findMsgByUserID);
	// Retrieve all Msgs to approve for :role
	router.get('/check/:role', approve.findMsgByRole);
	// Retrieve all Msgs to approve for :role in :unit
	router.get('/check/:role/:unit', approve.findMsgByRoleAndUnit);
	// Approve Msg by :role
	router.post('/pass/:role', approve.updateMsgToPass);
	// Deny Msg by :role
	router.post('/deny/:role', approve.updateMsgToDeny);

  app.use("/api", router);
};
