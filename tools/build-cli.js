/* eslint no-process-exit: 0 */

import 'colors';
import yargs from 'yargs';
import build from './build';
import { setExecOptions } from './exec';


const argv = yargs
  .help('h')
  .option('dev', {
    demand: false,
    default: false,
    describe: 'Only used when supplied with the --docs-only flag',
  })
  .argv;

setExecOptions(argv);

let buildProcess;

buildProcess = build(argv);

buildProcess
  .catch((err) => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });