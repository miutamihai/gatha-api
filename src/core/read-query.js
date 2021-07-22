import {of} from 'rxjs'
import {readFileSync} from 'fs'

export const readQuery = path => of(readFileSync(`${process.cwd()}/src/${path}/query.cypher`, 'utf-8'))
