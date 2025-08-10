import { search } from "../controller/employee.controller.js"
import {Router} from "express"

const router = Router();

router.route("/search").post(search);

export default router;
