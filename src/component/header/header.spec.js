import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../../../utlis'

const setUp =(props={})=>{
    const component=shallow(<Header  {...props} />)
    return component

};

//test();
describe('Header Component',()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    })

    
    //we can alson have nested describe
    it('It should render without errorrr',()=>{
       //const component = setUp()
       //console.log(component.debug());
       //const wrapper = component.find(`[data-test='headerComponent']`)
       const wrapper = findByTestAttr(component,'headerComponent')
       expect(wrapper.length).toBe(1);
    });

    it('should render a logo',()=>{
        const logo = findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1)
    });




})