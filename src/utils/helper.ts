import { BiomData, DataRow } from "../types/biom";

export function parseBiom(biomObject: BiomData): DataRow[] {
  const TAXONOMIC_LEVEL = 7
  const parsedBiomData: DataRow[] = [];
  const totalAbundance = biomObject.data.reduce((total, entry) => total + entry[2], 0);

  biomObject.rows.forEach((observation, observationIndex) => {
    const taxId = observation.metadata.lineage[TAXONOMIC_LEVEL].tax_id;
    const title = observation.metadata.lineage[TAXONOMIC_LEVEL].name;
    const abundanceScore = biomObject.data[observationIndex][2];
    const relativeAbundance = (abundanceScore / totalAbundance) * 100;
    const formattedRelativeAbundance = relativeAbundance < 0.01 ? '< 0.01%' : relativeAbundance.toFixed(2) + '%';

    parsedBiomData.push({
      title: title,
      taxId: taxId,
      abundanceScore: +abundanceScore.toFixed(2),
      relativeAbundance: formattedRelativeAbundance,
      uniqueMatchesFrequency: 0
    });
  });

  return parsedBiomData
}
