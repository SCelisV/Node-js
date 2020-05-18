import { Router } from "express"
import connectCtrl from "./connect.controller"

const router = new Router()

// associate 
router.route("/getConfig").post(connectCtrl.getConfig)

export default router
