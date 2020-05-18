import { ObjectId } from "bson"

let users
let MyTestDB

export default class connectDAO {
    static async injectDB(conn) {
      if (this.users) {
        return
      }
      try {
        MyTestDB = await conn.db(process.env.MYPROYECT00_NS)
        users = await conn.db(process.env.MYPROYECT00_NS).collection("users")
        this.users = users // only for testing
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in connectDAO: ${e}`,
        )
      }
    }
}