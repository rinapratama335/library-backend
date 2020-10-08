const { Category } = require("../../models");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Categories successfully loaded",
      data: {
        categories: categories,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Sever error",
    });
  }
};

exports.getDetailCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const datailCategory = await Category.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Detail category is loaded",
      data: {
        category: datailCategory,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Sever error",
    });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const createdCategory = await Category.create(
      {
        name: req.body.name,
      },
      { fields: ["name"] }
    );

    res.send({
      message: "Category has been created",
      data: createdCategory,
    });
  } catch (error) {
    console.log(err);

    res.status(500).send({
      message: "Sever error",
    });
  }
};

exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedCategory = await Category.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedCategory) {
      const returnUpdateCategory = Category.findOne({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.json({
        message: "Category has been updated",
        data: { category: await returnUpdateCategory },
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Server error",
    });

    console.log(err);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.destroy({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["name", "createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Category has been delated",
      data: {
        deleted_category: {
          id: id,
        },
      },
    });
  } catch (err) {
    res.status(500).send({
      message: "Server error",
    });

    console.log(err);
  }
};
