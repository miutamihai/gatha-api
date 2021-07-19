import {of} from 'rxjs'
import express from 'express'

export const createExpressApp = () => of(express())
