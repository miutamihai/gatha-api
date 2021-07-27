import {of} from 'rxjs'

const projectPath = 'src/startup/schema.graphql'

export const getPath = () => of(`${process.cwd()}/${projectPath}`)
