// eslint-disable-next-line no-undef
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-case': [2, 'always', ['lower-case', 'upper-case']],
		'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'pref', 'test', 'chore', 'revert', 'build', 'ci']]
	}
}