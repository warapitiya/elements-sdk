import React from 'react';
import chai from 'chai';
import {mount, shallow} from 'enzyme';
import {JSDOM} from 'jsdom';
import {StaticAlert} from '../index';

let expect = chai.expect;

describe('StaticAlert', () => {
    const {document} = new JSDOM('').window;
    Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
            global[property] = document.defaultView[property];
        }
    });
    let wrapper;

    describe('StaticAlert tests', function () {
        beforeEach(function () {
            wrapper = shallow(<StaticAlert type="Success" title="Woo!" message="Successful message"/>);
        });

        it('correctly passes the type prop', function () {
            expect(wrapper.unrendered.props.type).to.be.equal('Success');
        });

        it('correctly passes the title prop', function () {
            expect(wrapper.unrendered.props.title).to.be.equal('Woo!');
        });

        it('correctly passes the message prop', function () {
            expect(wrapper.unrendered.props.message).to.be.equal('Successful message');
        });

        it('toggles state when close button is clicked', function () {
            const wrapper = mount(<StaticAlert type="Error" title="Test title" message="Test message"/>);
            expect(wrapper.node.state.isOpen).to.be.true;

            wrapper.find('.close-title').simulate('click');
            wrapper.update();
            expect(wrapper.node.state.isOpen).to.be.false;
        });

    });
});
