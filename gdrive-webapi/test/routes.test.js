import {
    describe,
    test,
    expect
} from '@jest/globals'
import jestConfig from '../jest.config.mjs'
import Routes from './../src/routes.js'
 
describe('Routes test suite', () => {

    describe('setSocketInstance', () => {
        test('setSocket should store io instance', () => {
            const routes = new Routes()
            const ioObj = {
                to: (id) => ioObj,
                emit: (event, message) => {}
            }

            routes.setSocketInstance(ioObj)
            expect(routes.io).toStrictEqual(ioObj)
        })
    })

    describe('handler', () => {
        const defaultParams = {
            request: {
                headers: {
                    'Content-Type': 'multiplart/form-data'
                },
                method: '',
                body: {}
            },
            response: {
                setHeader: jest.fn(),
                writeHead: jest.fn(),
                end: jest.fn()
            }
        }

        test.todo('given an inexistent route it should choose default route', () => {

        })
        test.todo('it should set any request with CORS enabled', () => {
            
        })
        test.todo('given method OPTIONS it should choose options route', () => {
            
        })
        test.todo('given method POST it should choose post route', () => {
            
        })
        test.todo('given method GET it should choose get  route', () => {
            
        })
    })
})