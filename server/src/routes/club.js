import express from "express";
import {
  getMyCheckIns,
  getMyClubs,
  getClubById,
  createClub,
  checkIn,
  aboveFive,
  underFive,
} from "../controllers/club.js";
import { ROLE_ADMIN, ROLE_MEMBER } from "../util/constants.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";
const clubRouter = express.Router();

clubRouter.get("/aboveFive", aboveFive);
clubRouter.get("/underFive", underFive);

clubRouter.get(
  "/checkIns",
  protect,
  (req, res, next) => checkRole(req, res, next, ROLE_MEMBER),
  getMyCheckIns
);

clubRouter.get(
  "/myClubs",
  protect,
  (req, res, next) => checkRole(req, res, next, ROLE_ADMIN),
  getMyClubs
);

clubRouter.get("/:id", getClubById);

clubRouter.post(
  "/create",
  protect,
  (req, res, next) => checkRole(req, res, next, ROLE_ADMIN),
  createClub
);

clubRouter.patch(
  "/checkIn/:id",
  protect,
  (req, res, next) => checkRole(req, res, next, ROLE_MEMBER),
  checkIn
);

clubRouter.post(
  "/checkIn",
  protect,
  (req, res, next) => checkRole(req, res, next, ROLE_MEMBER),
  checkIn
);

export default clubRouter;
