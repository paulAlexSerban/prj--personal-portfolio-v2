import { fontWeight } from '../../src/settings';

test('snapshot of fontWeight', () => {
    expect(fontWeight).toMatchSnapshot();
});
