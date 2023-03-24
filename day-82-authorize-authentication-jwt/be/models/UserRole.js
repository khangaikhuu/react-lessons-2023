const mongoose = require("mongoose");

// Admin хэрэглэгч бол бүх эрхтэй хэрэглэгч байна
// Customer хэрэглэгч бол Admin Panel руу нэвтэрч чадахгүй хэрэглэгч байна
// User хэрэглэгч нь зарим нэг Admin Panel дээр устгах, өөрчлөх эсвэл үүсгэх эрхгүй хэрэглэгч байна.

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
    unique: true,
  },
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;
