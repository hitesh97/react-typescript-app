import * as React from 'react';
import { shallow, mount } from 'enzyme';
import AppDrawer from './app-drawer';
import {createShallow, createMount } from 'material-ui/test-utils';
import { MountOptions } from 'material-ui/test-utils/createMount';
import getClasses from 'material-ui/test-utils/getClasses';

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

    describe('With prop Open true', () => {
        it('should match a snapshot', () => {
            const component = materialMount(<AppDrawer open={true} />);
            expect(component).toMatchSnapshot();
            expect(component.props().open).toBe(true);
        });
    });
});
