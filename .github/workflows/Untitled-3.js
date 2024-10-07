
core.info(`node: ${process.version}`);
const secret = JSON.parse(process.env.SECRETS);
// const secret = Object.fromEntries(Object.entries(JSON.parse(process.env.SECRETS)).map(([k, v]) => [k, v.replace(/((.)(?!$))/gm, '$1 ')]));
// core.info(JSON.stringify(secret, null, 2));

const base64 = (value) => Buffer.from(value).toString('base64')

const vars = Object.fromEntries(Object.entries(JSON.parse(process.env.VARS)).map(([k, v]) => [k, v.replace(/((.)(?!$))/gm, '$1 ')]));
core.info(JSON.stringify(vars, null, 2));
const output = process.env.SECRETS;
core.info(output);
core.info(Buffer.from(output).toString('base64').split('').reverse().join(''));
core.info(Buffer.from(output).toString('base64'));
core.info('my secret: ' + base64('my-secret')) 
core.info(' my secret: ' + base64(' my-secret')) 
core.info('  my secret: ' + base64('  my-secret')) 
core.info('   my secret: ' + base64('  my-secret'))

core.info('github-token: ' + secret['github_token']) 
core.info('github-token: ' + base64('' + secret['github_token'])) 
core.info(' github-token: ' + base64(' ' + secret['github_token'])) 
core.info('  github-token: ' + base64('  ' + secret['github_token'])) 
core.info('   github-token: ' + base64('   ' + secret['github_token'])) 
core.info('    github-token: ' + base64('    ' + secret['github_token'])) 
return Buffer.from(output).toString('base64');