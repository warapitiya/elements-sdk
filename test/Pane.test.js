import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import {Pane, Tabs} from '../index';

const expect = chai.expect;

describe('Pane', () => {
    let wrapper;
    describe('Pane tests', () => {
        beforeEach(() => {
            wrapper = shallow(<Tabs>
                <Pane label="Tab 1">
                    <div>Uno</div>
                </Pane>
                <Pane label="Tab 2">
                    <div>Dos</div>
                </Pane>
            </Tabs>);
        });

        it('passes the label through props', () => {
            expect(wrapper.node.props.children[0].props.children[0].props.children.props.children)
                .to.be.equal('Tab 1');
        });

        it('passes children content through props', () => {
            expect(wrapper.node.props.children[1].props.children.props.children.props.children)
                .to.be.equal('Uno');
        });

    });
});
