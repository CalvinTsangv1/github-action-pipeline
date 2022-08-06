import { Test } from '@nestjs/testing';

describe('console log test', () => {
    it('testing', ()=> {
        const flag = true
        console.log('running test...')
        expect(flag).toBe(flag)
    })
})