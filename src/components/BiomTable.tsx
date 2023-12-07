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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="left">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {biomRows.map((row) => (
            <TableRow key={row.taxId}>
              <TableCell component="th" scope="row">
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
