import neo4j from 'neo4j-driver'

export const getDriver = () => neo4j.driver(process.env.DB_URL)
