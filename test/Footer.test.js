import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import {Footer} from '../index';

let expect = chai.expect;

describe('Footer', () => {
    const moreLinks = [{text: 'One', href: 'one'}, {text: 'Two', href: 'two'}];
    let wrapper;
    describe('Footer tests', () => {
        beforeEach(() => {
            const testLinks = [{text: 'First', href: 'first'}, {text: 'Second', href: 'second'}];
            wrapper = shallow(<Footer links={testLinks} copyrightText="CR text"/>);
        });

        it('should render the Footer', () => {
            expect(wrapper.type()).to.be.equal('footer');
        });

        it('has the correct Copyright text + year', () => {
            const year = new Date().getFullYear();
            const children = wrapper.node.props.children[1].props.children;
            expect(children).to.have.lengthOf(4);
            expect(children)
                .to.be.deep.equal(['Copyright © ', year, ' ', 'CR text']);
        });

        it('correctly passes the light prop', () => {
            const lightProp = shallow(<Footer links={moreLinks} light/>);
            expect(wrapper.instance().props.light).to.be.false;
            expect(lightProp.instance().props.light).to.be.true;
        });

        it('correctly assigns the stick class ', () => {
            const stickProp = shallow(<Footer links={moreLinks} singlePageStick/>);
            expect(stickProp.find('footer').hasClass('pe-footer--stick')).to.be.true;
        });

    });
});
