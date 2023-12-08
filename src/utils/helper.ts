import { BiomData, DataRow } from "../types/biom";

export function parseBiom(biomObject: BiomData): DataRow[] {
  const TAXONOMIC_LEVEL = 7
  const MATRIX_STEP = 3

  const parsedBiomData: DataRow[] = [];
  
  biomObject.rows.forEach(({ metadata: { lineage } }, index) => {
    const taxId = lineage[TAXONOMIC_LEVEL].tax_id;
    const title = lineage[TAXONOMIC_LEVEL].name;

    const [relativeRow, abundanceRow, frequencyRow] = biomObject.data.slice(index * MATRIX_STEP, (index + 1) * MATRIX_STEP);

    const abundanceScore = +abundanceRow[2].toFixed(2);
    const formattedRelativeAbundance = (relativeRow[2] >= 0.01) ? `${(relativeRow[2] * 100).toFixed(2)}%` : '< 0.01%';
    const uniqueMatchesFrequency =Math.trunc(frequencyRow[2])

    parsedBiomData.push({
      title: title,
      taxId: taxId,
      abundanceScore: abundanceScore, 
      relativeAbundance: formattedRelativeAbundance,
      uniqueMatchesFrequency: uniqueMatchesFrequency
    });
  });

  return parsedBiomData
}
