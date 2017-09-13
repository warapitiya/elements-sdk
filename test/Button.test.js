import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import {Button} from '../index';

const expect = chai.expect;

describe('Button', () => {
    let wrapper;

    describe('Basic Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button>Test Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.equal('button');
        });

        it('should have the correct default className', function () {
            expect(wrapper.hasClass('pe-btn')).to.be.true;
        });
    });

    describe('Primary Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnType="primary">Test Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.be.equal('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn-primary')).to.be.true;
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).to.be.equal('Test Button');
        })
    });

    describe('Disabled Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button disabled>Disabled Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.be.equal('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).to.be.true;
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).to.be.equal('Disabled Button');
        });

        it('should have the disabled attribute', function () {
            expect(wrapper.prop('disabled')).to.be.true;
        })
    });

    describe('Primary Disabled Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnType="primary" disabled>Disabled Primary Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.be.equal('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn-primary')).to.be.true;
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).to.be.equal('Disabled Primary Button');
        });

        it('should have the disabled attribute', function () {
            expect(wrapper.prop('disabled')).to.be.true;
        })
    });

    describe('Large Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnSize="lg">Large Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.be.equal('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).to.be.true;
            expect(wrapper.hasClass('pe-btn-lg')).to.be.true;
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).to.be.equal('Large Button');
        });
    });

    describe('xLarge Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnSize="xl">xLarge Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).to.be.equal('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).to.be.true;
            expect(wrapper.hasClass('pe-btn-xl')).to.be.true;
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).to.be.equal('xLarge Button');
        });
    });

});
