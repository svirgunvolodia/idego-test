// parse-biom.test.ts
import { parseBiom } from '../utils/helper';
import sampleBiomData from '../data/sample-test-biom.json';

describe('parseBiom', () => {
  it('should parse biom data correctly', () => {
    const parsedData = parseBiom(sampleBiomData);
    expect(parsedData).toHaveLength(sampleBiomData.rows.length);

    parsedData.forEach((parsedRow, index) => {
      const sampleRow = sampleBiomData.rows[index];
      expect(parsedRow.title).toBe(sampleRow.metadata.lineage[7].name);
      expect(parsedRow.taxId).toBe(sampleRow.metadata.lineage[7].tax_id);
      expect(parsedRow.abundanceScore).toBe(sampleBiomData.data[index][2]);

      if (parsedRow.taxId === 575598) {
        expect(parsedRow.relativeAbundance).toBe('< 0.01%');
      } else {
        expect(parsedRow.relativeAbundance).toBe('100.00%');
      }
    });
  });
});
