import { parseBiom } from '../utils/helper';
import sampleBiomData from '../data/sample-test-biom.json';

describe('parseBiom', () => {
  it('should parse biom data correctly', () => {
    const parsedData = parseBiom(sampleBiomData);
    expect(parsedData).toHaveLength(sampleBiomData.rows.length);

    parsedData.forEach((parsedRow, index) => {
      const { lineage } = sampleBiomData.rows[index].metadata;
      const relativeRow = sampleBiomData.data[index * 3];
      const abundanceRow = sampleBiomData.data[index * 3 + 1];
      const frequencyRow = sampleBiomData.data[index * 3 + 2];

      expect(parsedRow.title).toBe(lineage[7].name);
      expect(parsedRow.taxId).toBe(lineage[7].tax_id);
      expect(parsedRow.abundanceScore).toBe(+abundanceRow[2].toFixed(2));

      const expectedRelativeAbundance = abundanceRow[2] >= 0.01 ? `${(relativeRow[2] * 100).toFixed(2)}%` : '< 0.01%';
      expect(parsedRow.relativeAbundance).toBe(expectedRelativeAbundance);
      expect(parsedRow.uniqueMatchesFrequency).toBe(Math.trunc(frequencyRow[2]));
    });
  });
});
