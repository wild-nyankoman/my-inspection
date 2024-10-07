const core = require('@actions/core');
const github = require('@actions/github');

core.info(JSON.stringify(github.context));
