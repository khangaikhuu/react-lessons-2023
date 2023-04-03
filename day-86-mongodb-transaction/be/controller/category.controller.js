const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ status: true, categories });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json({ status: true, category });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json({ status: true, category });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ status: true, category });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.json({ status: true, category });
  } catch (error) {
    res.json({ status: false, error });
  }
};
