import Club from "../models/Club.js";
import { RESULT_LIMIT_HOMEPAGE } from "../util/constants.js";

// @desc checkin to a club
// @route PATCH /api/club/checkIn
// @access restricted to members
export const checkIn = async (req, res) => {
  try {
    const user = req.user;
    const clubId = req.params.id;

    if (!clubId) {
      return res.status(400).json({
        success: false,
        message: "Bad Request: must provide an club id",
      });
    }
    const club = await Club.findById({ _id: clubId });

    if (!club) {
      return res.status(400).json({
        success: false,
        message: "Bad Request: invalid club id",
      });
    }

    await Club.findByIdAndUpdate(clubId, {
      member: user._id,
    });

    const checkedInClub = await Club.findOne({ _id: clubId }).populate(
      "member"
    );
    checkedInClub.member = { name: checkedInClub.member["name"] };

    return res.status(200).json({
      success: true,
      data: checkedInClub,
      message: "You successfully checked in the club!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create club
// @route   POST /api/club/create
// @access  Private restricted by admin

export const createClub = async (req, res) => {
  try {
    if (!req.body.club || typeof req.body.club !== "object") {
      res.status(400).json({
        success: false,
        message: `You need to provide a 'club' object. Received: ${JSON.stringify(
          req.body.club
        )}`,
      });
      return;
    }

    const newClub = await Club.create({
      ...req.body.club,
      admin: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: newClub,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Get all validation errors and send them along with the response
      let errors = {};
      for (let key in error.errors) {
        errors[key] = error.errors[key].properties.message;
      }
      res.status(400).json({
        success: false,
        message: "Unable to create an club due to validation errors",
        errors,
      });
      return;
    }

    return res
      .status(500)
      .json({ success: false, message: "Club can not be created" });
  }
};
// @desc  get all clubs that the current user has checked in
// @route GET /api/event/checkIns
// @access  private restricted to member

export const getMyCheckIns = async (req, res) => {
  try {
    const user = req.user;
    const checkIns = await Club.find({ member: user._id });
    return res.status(200).json({
      success: true,
      data: checkIns,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get myClubs
// @route   GET /api/myClubs
// @access  Private restricted to admin
export const getMyClubs = async (req, res) => {
  try {
    const clubs = await Club.find({ admin: req.user.id });
    res.status(200).json({ success: true, data: clubs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Club can not be fetched" });
  }
};
// @desc    Get club by Id
// @route   GET /api/club/:id
// @access  Public

export const getClubById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Bad Request: club id must be provided",
      });
    }

    let club = await Club.findById(id).populate([
      {
        path: "admin",
        select: ["_id", "name"],
      },
      {
        path: "member",
        select: ["_id", "name", "email"],
      },
    ]);

    if (!club) {
      return res.status(400).json({
        success: false,
        message: "Bad Request: Invalid club id",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        club,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get clubs under 5 credits
// @route   GET /api/club/underFive
// @access  Public
export const underFive = async (req, res) => {
  try {
    const clubs = await Club.where("credit")
      .lte(4)
      .sort({ credit: 1 })
      .limit(RESULT_LIMIT_HOMEPAGE);
    res.status(200).json({ success: true, count: clubs.length, result: clubs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: "Unable to get clubs, try again later" });
  }
};

// @desc    Get clubs above 5 credits
// @route   GET /api/club/aboveFive
// @access  Public

export const aboveFive = async (req, res) => {
  try {
    const clubs = await Club.where("credit")
      .gte(5)
      .sort({ credit: 1 })
      .limit(RESULT_LIMIT_HOMEPAGE);
    res.status(200).json({ success: true, count: clubs.length, result: clubs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: "Unable to get clubs, try again later" });
  }
};
