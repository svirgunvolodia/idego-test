import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import biom from '../data/biom.json';
import { parseBiom } from '../utils/helper';
import { DataRow } from '../types/biom';

import styles from '../styles/BiomTable.module.css';

function BiomTable() {
  const [biomRows, setBiomRows] = useState<DataRow[]>([])
  const columns = ['Name', 'Tax ID', 'Abundance Score', 'Relative Abundance', 'Unique Matches Frequency']

  useEffect(() => {
    const parsedBiom = parseBiom(biom)
    setBiomRows(parsedBiom)
  }, [])

  return (
      <Table className={styles.table} aria-label="simple table">
        <TableHead className={styles.tableHead}>
          <TableRow>
            {columns.map((column) => (
              <TableCell className={styles.tableHeadCell} key={column} align="left">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {biomRows.map((row) => (
            <TableRow className={styles.tableRow} key={row.taxId}>
              <TableCell scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.taxId}</TableCell>
              <TableCell align="left">{row.abundanceScore}</TableCell>
              <TableCell align="left">{row.relativeAbundance}</TableCell>
              <TableCell align="left">{row.uniqueMatchesFrequency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default BiomTable
