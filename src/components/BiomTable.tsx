import React, { useEffect, useState } from 'react';
import biom from '../data/biom.json';
import { parseBiom } from '../utils/helper';
import { DataRow } from '../types/biom';

import styles from '../styles/BiomTable.module.css';

function BiomTable() {
  const [biomRows, setBiomRows] = useState<DataRow[]>([])

  useEffect(() => {
    const parsedBiom = parseBiom(biom)
    setBiomRows(parsedBiom)
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Tax ID</th>
          <th>Abundance Score</th>
          <th>Relative Abundance</th>
          <th>Unique Matches Frequency</th>
        </tr>
      </thead>
      <tbody>
        {biomRows.map((row) => (
          <tr key={row.taxId}>
            <td>{row.title}</td>
            <td>{row.taxId}</td>
            <td>{row.abundanceScore}</td>
            <td>{row.relativeAbundance}</td>
            <td>{row.uniqueMatchesFrequency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BiomTable
