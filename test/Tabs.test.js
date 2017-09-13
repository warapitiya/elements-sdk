import React from 'react';
import chai from 'chai';
import {mount, shallow} from 'enzyme';
import {JSDOM} from 'jsdom';
import {Pane, Tabs} from '../index';

let expect = chai.expect;

describe('Tabs', () => {
    const {document} = new JSDOM('').window;
    Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
            global[property] = document.defaultView[property];
        }
    });

    describe('Tabs tests', function () {

        it('renders a ul', function () {
            const wrapper = shallow(<Tabs>
                <Pane label="Tab 1">
                    <div>Content 1</div>
                </Pane>
                <Pane label="Tab 2">
                    <div>Content 2</div>
                </Pane>
            </Tabs>);
            expect(wrapper.node.props.children[0].type).to.be.equal('ul');
        });

        it('sets the correct selected tab', function () {
            const wrap = mount(<Tabs><Pane label="1">
                <div>1</div>
            </Pane><Pane label="2">
                <div>Content 2</div>
            </Pane></Tabs>);
            const wrappy = mount(<Tabs selected={1}><Pane label="1">
                <div>1</div>
            </Pane><Pane label="2">
                <div>Content 2</div>
            </Pane></Tabs>);
            expect(wrap.node.state.selected).to.be.equal(0);
            expect(wrappy.node.state.selected).to.be.equal(1);
        });

    });
});
