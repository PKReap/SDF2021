require(`${process.cwd()}/report/report`);

const maintainability = __report.summary.total.maintainability;

if(maintainability < 90) {
  console.log(`Plato reported total maintainability as ${maintainability}`);
}

process.exitCode = maintainability >= 90 ? 0 : 1;
