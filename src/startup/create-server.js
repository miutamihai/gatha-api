import {pipe} from 'rxjs'
import {tap, map} from 'rxjs/operators'
import {graphqlHTTP} from 'express-graphql'
import express from 'express'

export const createServer = () => pipe(
    map(config => [express(), config]),
    tap(([app, {schema}]) => app.use('/graphql', graphqlHTTP({schema}))),
)
