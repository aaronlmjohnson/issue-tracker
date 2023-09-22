#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// Get arguments passed on command line
var dotenv = require("dotenv");
var bcrypt = require("bcryptjs");
dotenv.config();
var project_1 = require("./project");
var user_1 = require("./user");
var projects = [];
var users = [];
var mongoose_1 = require("mongoose");
mongoose_1["default"].set("strictQuery", false);
main()["catch"](function (err) { return console.log(err); });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function main() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, mongoose_1["default"].connect(connectionString)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var connectionString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Debug: About to connect");
                    connectionString = process.env.ATLAS_URI || "";
                    main()["catch"](function (err) { return console.log(err); });
                    console.log("Debug: Should be connected?");
                    return [4 /*yield*/, createUsers()];
                case 1:
                    _a.sent();
                    console.log("Debug: Closing mongoose");
                    return [2 /*return*/];
            }
        });
    });
}
function projectCreate(index, title, description, date_created) {
    return __awaiter(this, void 0, void 0, function () {
        var project;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    project = new project_1["default"]({ title: title, description: description, date_created: date_created });
                    return [4 /*yield*/, project.save()];
                case 1:
                    _a.sent();
                    projects[index] = project;
                    console.log("Added project: ".concat(title));
                    return [2 /*return*/];
            }
        });
    });
}
function userCreate(index, username, password, role, date_created) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            bcrypt.hash(password, 10, function (err, hashedPassword) { return __awaiter(_this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = new user_1["default"]({ username: username, password: hashedPassword, role: role, date_created: date_created });
                            return [4 /*yield*/, user.save()];
                        case 1:
                            _a.sent();
                            users[index] = user;
                            console.log("Added user: ".concat(username));
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
function createUsers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Adding users");
                    return [4 /*yield*/, Promise.all([
                            userCreate(0, "Aaron", "password", "Administrator", Date.now()),
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createProjects() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Adding projects");
                    return [4 /*yield*/, Promise.all([
                            projectCreate(0, "Issue Tracker", "An app for tracking bugs and features.", "09-16-2023"),
                            projectCreate(1, "Cool Game", "A cool new game.", "03-07-2023"),
                            projectCreate(2, "Video Game Display App", "A project that displays video game data from RAWG API", "09-01-2022"),
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
