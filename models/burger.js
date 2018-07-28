const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createTable: function (name, cb) {
        orm.createTable("burgers", [
            "burger_name", "devoured"
        ], [
                name, false
            ], cb);
    },
    updateTable: function (id, cb) {
        var condition = "id=" + id;
        orm.updateTable("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;
