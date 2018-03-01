import * as React from 'react';
import { shallow, mount } from 'enzyme';
import AppDrawer from './app-drawer';
import {createShallow, createMount } from 'material-ui/test-utils';
import { MountOptions } from 'material-ui/test-utils/createMount';
import getClasses from 'material-ui/test-utils/getClasses';
import createRender from 'material-ui/test-utils/createRender';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as TodoActions from '../../features/counters/actions';
import chai from 'chai';
import sinon from 'sinon';

describe('AppDrawer', () => {

    let materialMount: any, classes: any;
    beforeEach(() => {
        materialMount = createShallow();
        classes = getClasses(<AppDrawer />);
    });

    describe('without props', () => {
        it('should match a snapshot', () => {
            const component = materialMount(<AppDrawer />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('When Drawer is Open', () => {
        describe('And drawer is clicked then', () => {
            it('it should close drawer', () => {
                const initialState = {AppReducer: { drawerIsOpen: true}};
                const mockStore = configureStore();
                const store = mockStore(initialState);
                const mnt = createShallow();
                const onDrawerClick  = jest.fn();
                const component = mnt(<AppDrawer store={store} open={true} onClick={onDrawerClick} />);
                expect(component).toMatchSnapshot();
                expect(component.props().open).toBe(true);
                component.dive().simulate('click');
                expect(onDrawerClick).toBeCalled();
            });
        });
    });
});
