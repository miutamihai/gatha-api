const {of} = require('rxjs')
const express = require('express')

const createExpressApp = () => of(express())

module.exports = createExpressApp
