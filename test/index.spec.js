import { expect } from './helpers'

import nuclideTestRunnerMocha from '../lib'

describe('nuclide-test-runner-mocha', function () {
  describe('provideTestRunner', function() {
    it('is a function', function () {
      expect(nuclideTestRunnerMocha.provideTestRunner).to.be.a('function')
    })
  })
})
