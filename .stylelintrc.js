module.exports = {
	"extends": ["stylelint-config-standard"],
	"rules": {
		"indentation": ["tab", { "severity": "error" }],
		// Increase the max nesting depth a bit. See http://thesassway.com/beginner/the-inception-rule
		"max-nesting-depth": [4, { "severity": "warning" }],
		// Fractional numbers don't require a leading zero.
		"number-leading-zero": ["never", { "severity": "warning" }],
		// Inside blocks, don't error if there's no empty line between rules.
		"rule-empty-line-before": ["always", { ignore: ["inside-block"] }],
		// Using id selectors isn't as bad as they think; default is 0 and an error.
		"selector-max-id": [1, { "severity": "warning" }]
	}
}
