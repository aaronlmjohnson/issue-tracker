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
var ticket_1 = require("./ticket");
var comment_1 = require("./comment");
var projects = [];
var users = [];
var tickets = [];
var comments = [];
var mongoose_1 = require("mongoose");
mongoose_1["default"].set("strictQuery", false);
var connectionString = process.env.ATLAS_URI || "";
var timeOut = function (ms) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("waiting...");
        return [2 /*return*/, new Promise(function (r) { return setTimeout(r, ms); })];
    });
}); };
main()["catch"](function (err) { return console.log(err); });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Debug: About to connect");
                    return [4 /*yield*/, mongoose_1["default"].connect(connectionString)];
                case 1:
                    _a.sent();
                    console.log("Debug: Should be connected?");
                    return [4 /*yield*/, createUsers()];
                case 2:
                    _a.sent();
                    //to prevent error of projects being created first
                    return [4 /*yield*/, timeOut(3000)];
                case 3:
                    //to prevent error of projects being created first
                    _a.sent();
                    return [4 /*yield*/, createProjects()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, createTickets()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, createComments()];
                case 6:
                    _a.sent();
                    console.log("Debug: Closing mongoose");
                    mongoose_1["default"].connection.close();
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
function projectCreate(index, title, description, date_created, project_lead, developers_assigned_to) {
    return __awaiter(this, void 0, void 0, function () {
        var project;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    project = new project_1["default"]({ title: title, description: description, date_created: date_created, project_lead: project_lead, developers_assigned_to: developers_assigned_to });
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
function ticketCreate(index, title, description, project, date_created, author, priority, status, type, assignee) {
    return __awaiter(this, void 0, void 0, function () {
        var ticket;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ticket = new ticket_1["default"]({
                        title: title,
                        description: description,
                        project: project,
                        date_created: date_created,
                        author: author,
                        priority: priority,
                        status: status,
                        type: type,
                        assignee: assignee
                    });
                    return [4 /*yield*/, ticket.save()];
                case 1:
                    _a.sent();
                    tickets[index] = ticket;
                    console.log("Added ticket: ".concat(title));
                    return [2 /*return*/];
            }
        });
    });
}
function commentCreate(index, author, message, project, date_created, ticket) {
    return __awaiter(this, void 0, void 0, function () {
        var comment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    comment = new comment_1["default"]({
                        author: author,
                        message: message,
                        project: project,
                        date_created: date_created,
                        ticket: ticket
                    });
                    return [4 /*yield*/, comment.save()];
                case 1:
                    _a.sent();
                    comments[index] = comment;
                    console.log("Added comment from : ".concat(author));
                    return [2 /*return*/];
            }
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
                            userCreate(1, "DeveloperBob", "password", "Developer", Date.now()),
                            userCreate(2, "ProjectLeadSue", "password", "Project Lead", Date.now()),
                            userCreate(3, "DeveloperMike", "password", "Developer", Date.now()),
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
        var lead;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findOne({ role: "Project Lead" }).exec()];
                case 1:
                    lead = _a.sent();
                    return [4 /*yield*/, projectCreate(0, "Issue Tracker", "An app for tracking bugs and features.", Date.now(), users[2], [users[1], users[3]])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createTickets() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Adding Tickets");
                    return [4 /*yield*/, Promise.all([
                            ticketCreate(0, "Track Ticket History", "Being able to see the history of all of the changes of a Ticket.", projects[0], Date.now(), users[1], "Medium", "Not Assigned", "Feature", "")
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createComments() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Adding Comments");
                    /*
                      author,
                      message,
                      project,
                      date_created
                    */
                    return [4 /*yield*/, Promise.all([
                            commentCreate(0, users[2], "Is anyone available to work on this?", projects[0], Date.now(), tickets[0]),
                            commentCreate(1, users[1], "I'm already working on a ticket.", projects[0], Date.now(), tickets[0]),
                            commentCreate(2, users[3], "I'm available to work on it.", projects[0], Date.now(), tickets[0])
                        ])];
                case 1:
                    /*
                      author,
                      message,
                      project,
                      date_created
                    */
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
