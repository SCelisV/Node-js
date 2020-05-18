import ConnectDAO from "../dao/connectDAO"

export default class ConnectController {

  static async getConfig(req, res, next) {
    const { poolSize, wtimeout, authInfo } = await ConnectDAO.getConfiguration()
    try {
      let response = {
        pool_size: poolSize,
        wtimeout,
        ...authInfo,
      }
      res.json(response)
    } catch (e) {
      res.status(500).json({ error: e })
    }
  }
}
