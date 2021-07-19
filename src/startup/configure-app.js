import {combineLatest, of} from 'rxjs'
import express from 'express'

import {buildGraphqlConfig} from 'startup/build-graphql-config'

export const configureApp = () => combineLatest([of(express()), buildGraphqlConfig()])
