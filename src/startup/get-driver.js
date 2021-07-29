import neo4j from 'neo4j-driver'

const makeAuth = () => neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASS)

export const getDriver = () => neo4j.driver(process.env.DB_URL, makeAuth())
