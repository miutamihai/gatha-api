import { PrismaClient } from '@prisma/client'
import {from, firstValueFrom} from 'rxjs'

export const resolver = () => firstValueFrom(from(new PrismaClient().operator.findMany()))
