// import React from 'react'
// import {shallow} from 'enzyme'
// import Headline from './index'
// import { findByTestAttr} from '../../../utlis/index'

// const setUp =(props={})=>{
//     const component = shallow(<Headline {...props}/>)
//     return component
// }

// describe('Headline component',()=>{

//     describe('Have Props',()=>{
//         let wrapper;
//         beforeEach(()=>{
//             const props={
//                 header:'Test Header',
//                 desc:'Test Desc'
//             };
//             wrapper = setUp(props);
//         });
//         it('Should render without errors',()=>{
//             const component= findByTestAttr(wrapper,'HeadlineComponent')
//             expect(component.length).toBe(1)
//         });
//         it('Should render a H!',()=>{
//             const h1 = findByTestAttr(wrapper, 'header')
//             expect(h1.length).toBe(1)
//         })
//         it('Should render a desc',()=>{
//             const desc = findByTestAttr(wrapper, 'desc')
//             expect(desc.length).toBe(1)
//         })
        
//     })

//     describe('Have No props',()=>{
//         let wrapper;
//         beforeEach(()=>{
//             wrapper = setUp();
//         })
//         it('Should not render',()=>{
//             const component = findByTestAttr(wrapper,'HeadlineComponent')
//             expect(component.length).toBe(0)
//         })
//     })

    
// })
import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index'
import checkPropTypes from 'check-prop-types'
import {checkProps} from '../../../utlis/index'
const setUp=(props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component
}

describe("Headline Component",()=>{
    describe('Checking PropTypes',()=>{
        it('It should not throw a waring',()=>{

            const expectedProps={
                header:'Test header',
                desc:'Test Desc',
                tempArr:[{
                    fName:'test fname',
                    lNmae:'Test lName',
                    email:'test@email.com',
                    age:23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })
})