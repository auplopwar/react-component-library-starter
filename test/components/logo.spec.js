import React from 'react';
import Logo from '../../src/components/logo';

describe('Logo Component tests', function () {

    it('renders without problems', function () {
        const wrapper = render(
            <Logo />
        );

        expect(wrapper).toMatchSnapshot();
    });

});