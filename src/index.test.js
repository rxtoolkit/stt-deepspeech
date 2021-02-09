import {expect} from 'chai';
import fs from 'fs';
import path from 'path';
// import sinon from 'sinon';
// import {marbles} from 'rxjs-marbles/mocha';

import {validate} from './index';

const patientExample = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, './schemas/r4/resources/patient.json')
  ).toString()
);

describe('index', () => {
  it('should export a function', () => {
    expect(validate).to.be.a('function');
  });

  it('should validate a patient', () => {
    const {error, value} = validate('patient', patientExample);
    expect(error).to.be.an('undefined');
    expect(value).to.be.an('object');
  });
});
