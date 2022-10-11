import { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import User from "../models/SignUpModels";


const usersRouter = Router();
//get all users
usersRouter.get("/all", async (req: Request, res: Response) => {
  const users = User.find((err: any, users: any) => {
    console.log(users);

    if (err) {
      res.send("Error!");
    } else {
      res.send(users);
    }
  });
});
//  Update user
usersRouter.put("/:id", async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        return (req.body.password = await bcrypt.hash(req.body.password, salt));
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json("error: " + err.message);
    }
  } else {
    return res.status(403).json("can not update ");
  }
});
// logged in user
usersRouter.get("/", async (req: Request, res: Response) => {
  res.send(req.user);
});

//  Delete user
usersRouter.delete("/:id", async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json("error: " + err.message);
    }
  } else {
    return res.status(403).json("can not delete ");
  }
});

//  Find User
usersRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user!._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default usersRouter;
