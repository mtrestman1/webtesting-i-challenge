const enhancer = require('./enhancer.js');
// test away!

describe('repair', () => {
    it('should restore durability to 100', () => {
   
        expect(enhancer.repair({
            name: 'max',
            durability: 80,
            enhancement: 18
          
          })).toEqual({
              name: 'max',
              durability: 100,
              enhancement: 18
          })
    })
    
    it('should not alter an already repaired item', () => {
        
        expect(enhancer.repair({
            name: 'max',
            durability: 100,
            enhancement: 18
          
          })).toEqual({
              name: 'max',
              durability: 100,
              enhancement: 18
          })
    })
})

describe('success', () => {
    it('should return modified obj with enhancement success', () => {
        expect(enhancer.succeed({
            name: 'max',
            durability: 70,
            enhancement: 18
        })).toEqual({
            name: 'max',
            durability: 70,
            enhancement: 19
        })
    })
    it('should not alter an already enhanced item', () => {
        expect(enhancer.succeed({
            name: 'max',
            durability: 70,
            enhancement: 20
        })).toEqual({
            name: 'max',
            durability: 70,
            enhancement: 20
        })
    })
})

describe('fail', () => {
    it('should return new item with enhancement failure when enhance is > 16', () => {
        expect(enhancer.fail({
            name: 'max',
            durability: 40,
            enhancement: 17
        })).toEqual({
            name: 'max',
            durability: 30,
            enhancement: 16
        })
    })

    it('should return new item with enhancement failure when enhancement is <= 16', () => {
        expect(enhancer.fail({
            name: 'max',
            durability: 40,
            enhancement: 16
        })).toEqual({
            name: 'max',
            durability: 30,
            enhancement: 16
        })
    })

    it('should return new item with enhancement failure if enhance is less than 15', () => {
        expect(enhancer.fail({
            name: 'max',
            durability: 40,
            enhancement: 14
        })).toEqual({
            name: 'max',
            durability: 35,
            enhancement: 14
        })
    })
})
