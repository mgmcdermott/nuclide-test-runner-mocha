import { spawn } from 'child_process'
import { Emitter } from 'atom'

import type { TestRunner, Observable, Message } from 'nuclide/pkg/nuclide-test-runner'

type ProvideTestRunner = () => TestRunner

class MochaTestRunner {
  constructor(uri, mochaFile) {
    this.uri = uri
    this.mochaFile = mochaFile,
    this.emitter = new Emitter()
    this.testsDir = uri + '/__tests__'
  }

}

const provideTestRunner : ProvideTestRunner => ({
  runTest(openedFilePath: string): Observable<Message> {
        console.log(`request test runner for openedFilePath ${openedFilePath}`)

        basePath = null

        let mocha = ''

        if (itemInArr('/__tests__/', openedFilePath) && pathOfAllowedExt(openedFilePath)) {
          mocha = openedFilePath
        }

        atom.project.getPaths().forEach(p => {
          if (!path.relative(p, openedFilePath).match(/^\.\./)) {
            basePath = p
          }
        })

        if (basePath == null) {
          return null
        }

        // console.log(`Jest called with basePath: "${basePath}" and mocha: "${mocha}"`)

        return new JestTestRunner(basePath, mocha)
      }
    },
  // Used to identify this runner in the testing panel to allow users to select the correct
  // runner for a given test.
  label: 'Mocha Test Runner',
})

export default {
  provideTestRunner
}
