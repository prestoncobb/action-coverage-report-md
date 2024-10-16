export function getReportParts(rawCoverage: string): {
  coverageInfoHeader: string[]
  coverageInfoRows: string[]
} {
  const trimmedRawCoverage = rawCoverage.trim()
  const rawCoverageRows = trimmedRawCoverage.split('\n')
  console.log(`Raw Coverage Rows: ${rawCoverageRows}`)
  const coverageRows = rawCoverageRows.slice(1, rawCoverageRows.length - 1)
  console.log(`Coverage Rows: ${coverageRows}`)
  const coverageInfoHeader = coverageRows.slice(0, 3)
  const coverageInfoRows = coverageRows.slice(3)
  console.log(`Coverage Info Rows: ${coverageInfoRows}`)

  return { coverageInfoHeader, coverageInfoRows }
}
