import neo4j from 'neo4j-driver'
import {firstValueFrom, from} from 'rxjs'
import {map, mergeMap} from 'rxjs/operators'
import {readQuery} from 'core/read-query'

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'virtual1234'))

export const resolver = ({input}) => firstValueFrom(
    readQuery('src/person/query.cypher')
        .pipe(mergeMap(query => from(driver.session().run(query, input))))
        .pipe(map(result => result.records[0].get(0).properties))
)
