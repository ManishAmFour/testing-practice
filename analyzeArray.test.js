import analyzeArray from "./analyzeArray.js";

test('outcome array',()=>{
    const object = analyzeArray([1,8,3,4,2,6]);

    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})