const git = require('simple-git');

/**
 * @description Clone a Git repository.
 * @returns {Promise<SimpleGit & Promise<string>>}
 */
const cloneFn = () => git().clone('https://github.com/rimiti/simple-git-mock.git');

module.exports = {
    cloneFn,
}
