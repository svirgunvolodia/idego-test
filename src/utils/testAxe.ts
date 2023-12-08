import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

const axeTest = async (getComponent, rules = {}) => {
  test('should have no accessibility violations', async () => {
    const { container } = getComponent();
    const results = await axe(container, rules);

    expect(results).toHaveNoViolations();
  });
};

export default axeTest;