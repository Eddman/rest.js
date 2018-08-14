const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/922', () => {
  it('octokit.issues.edit({..., milestone: null})', () => {
    nock('https://api.github.com')
      .post('/repos/chrisvariety/test/check-runs')
      .reply(200, [])

    const client = new Octokit()
    return client.checks.create({
      owner: 'chrisvariety',
      repo: 'test',
      name: 'QA',
      head_sha: 'SHA',
      status: 'in_progress',
      started_at: '2018-01-01T06:00:00Z',
      output: {
        title: 'Test',
        summary: 'Test!',
        text: 'Test'
      },
      actions: []
    })
  })
})
