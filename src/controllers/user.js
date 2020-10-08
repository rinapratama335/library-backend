const { Users } = require("../../models");

exports.getAllUser = async (req, res) => {
  try {
    const usersData = await Users.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Users successfully loaded",
      data: {
        users: usersData,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Users.destroy({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "User successfully removed",
      data: {
        user: {
          id: id,
        },
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Server error",
    });
  }
};
