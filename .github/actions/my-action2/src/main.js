const core = require('@actions/core');
const github = require('@actions/github');

core.info(JSON.stringify(github.context.payload.pull_request?.base, null, 2));
core.exportVariable('XXXXX', 'yyyyy');