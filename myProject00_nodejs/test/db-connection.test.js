import ConnectDAO from "../src/dao/connectDAO"

describe("Connection", async () => {
  beforeAll(async () => {
    await ConnectDAO.injectDB(global.mflixClient)
  })

  test("Can access MyTestDB data", async () => {
    const mflix = global.mflixClient.db(process.env.MYPROYECT00_NS)
    const collections = await mflix.listCollections().toArray()
    const collectionNames = collections.map(elem => elem.name)
    expect(collectionNames).toContain("users")
  })

})
