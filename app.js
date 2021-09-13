const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const {
    convertToNumber,
    findMean,
    findMedian,
    findMode
} = require("./math");


app.get("/mean", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass in a query key of numbers.", 404);
    }
    const nums = req.query.nums.split(",");
    const convertedNum = convertToNumber(nums);
    if (convertedNum instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const meanVal = findMean(convertedNum);
    const result = {
        operation: "mean",
        value: meanVal
    };
    res.send(result);
});

app.get("/median", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass in a query key of numbers.", 404);
    }
    const nums = req.query.nums.split(",");
    const convertedNum = convertToNumber(nums);
    if (convertedNum instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const medianVal = findMedian(convertedNum);
    const result = {
        operation: "median",
        value: medianVal
    };
    res.send(result);
});

app.get("/mode", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass in a query key of numbers.", 404);
    }
    const nums = req.query.nums.split(",");
    const convertedNum = convertToNumber(nums);
    if (convertedNum instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const modeVal = findMode(convertedNum);
    const result = {
        operation: "mode",
        value: modeVal
    };
    res.send(result);
});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app;