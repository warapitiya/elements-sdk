import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import {Icon} from '../index';

let expect = chai.expect;

describe('Icon', () => {
    let wrapper;
    describe('Basic Tests with alt texts', function () {
        beforeEach(function () {
            wrapper = shallow(<Icon name="delete-18">Alt text</Icon>);
        });

        it('should render the icon as svg', function () {
            expect(wrapper.type()).to.be.equal('svg');
        });

        it('should have the correct default className', function () {
            expect(wrapper.hasClass('pe-icon--delete-18')).to.be.true;
        });

        it('should have an aria-labelledby', function () {
            expect(wrapper.prop('aria-labelledby')).not.to.be.undefined;
        });
    });

    describe('Basic Tests no alt texts', function () {
        beforeEach(function () {
            wrapper = shallow(<Icon name="delete-24"/>);
        });

        it('should render the icon as svg', function () {
            expect(wrapper.node.type).to.be.equal('svg');
        });

        it('should have the larger (24px) className if set', function () {
            expect(wrapper.hasClass('pe-icon--delete-24')).to.be.true;
        });

        /* apparently expectJS can't be used to test if things don't exist or
        are undefined because if it's undefined it can't check it anyway
            it('should not have aria-labelledby without alt text', function() {
              expect(wrapper.prop('aria-labelledby')).not.toExist();
            });*/
    });

});
