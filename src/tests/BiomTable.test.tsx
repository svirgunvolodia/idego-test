import React from 'react';
import { render } from '@testing-library/react';
import BiomTable from '../components/BiomTable';
import axeTest from '../utils/testAxe';

jest.mock('../utils/helper', () => ({
  parseBiom: jest.fn(() => [
    {
      title: 'MockedSpecies',
      taxId: 123,
      abundanceScore: 0.1,
      relativeAbundance: '100.00%',
      uniqueMatchesFrequency: 0,
    },
  ]),
}));

const getComponent = (props = {}) => render((
  <BiomTable {...props} />
));

axeTest(getComponent)

describe('BiomTable', () => {
  it('renders table with correct data', () => {
    const { getByText } = getComponent()

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Tax ID')).toBeInTheDocument();
    expect(getByText('Abundance Score')).toBeInTheDocument();
    expect(getByText('Relative Abundance')).toBeInTheDocument();
    expect(getByText('Unique Matches Frequency')).toBeInTheDocument();

    expect(getByText('MockedSpecies')).toBeInTheDocument();
    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('0.1')).toBeInTheDocument();
    expect(getByText('100.00%')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });
});
