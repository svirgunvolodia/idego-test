interface LineageElement {
  rank: string;
  name: string;
  tax_id: number;
}

interface Metadata {
  taxonomy: string[];
  tax_id: number;
  title: string;
  lineage: LineageElement[];
  id: string;
}

export interface DataRow {
  title: string;
  taxId: number;
  abundanceScore: number;
  relativeAbundance: string;
  uniqueMatchesFrequency: number;
}

export interface BiomRow {
  id: string;
  metadata: Metadata;
}

export interface BiomData {
  id: string;
  format: string;
  format_url: string;
  matrix_type: string;
  generated_by: string;
  date: string;
  type: string;
  matrix_element_type: string;
  shape: number[];
  data: number[][];
  rows: BiomRow[];
}

