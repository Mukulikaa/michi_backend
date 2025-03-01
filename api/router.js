const router = require("express").Router();
const {
  getProfile,
  updatePassion,
  postNewRoadmap,
  updateRoadmap,
  postRoadmapCheckpoints,
  getRoadmapCheckpoints,
  getSuggestions,
  getFeed,
  updateSubmission,
  postRegisterNewUser
} = require("../api/controller/controller.js");
const { passAuth } = require("./controller/authenticate.js");

router.get("/getProfile", getProfile);
router.patch("/updatePassion", updatePassion);
router.post("/postNewRoadmap", postNewRoadmap);
router.patch("/updateRoadmap", updateRoadmap);
router.post("/postRoadmapCheckpoints", postRoadmapCheckpoints);
router.get("/getRoadmapCheckpoints", getRoadmapCheckpoints);
router.get("/getSuggestions", getSuggestions);
router.get("/getFeed", getFeed);
router.patch("/updateSubmission", updateSubmission);

// router.post('/auth/google/callback', passAuth, postRegisterNewUser);

module.exports = router;