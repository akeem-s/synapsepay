MAKEFLAGS = -j1

BIN = node_modules/.bin

ISPARTA_CMD = $(BIN)/isparta cover
MOCHA_CMD = node_modules/mocha/bin/_mocha

CODECLIMATE_REPO_TOKEN=55770306070dde59b89f658a9581bda139bff6b37daa1a38cd9d38ac7ba43115 codeclimate-test-reporter

.PHONY: test test-cov

test:
	node $(MOCHA_CMD) test

test-cov:
	rm -rf coverage
	$(ISPARTA_CMD) --include-all-sources -x "**/dist/**" -x "**/server.js" -x "**/src/index.js" -x "**/webpack-prod.js" -x "**/webpack.config.js" -x "**/public/vendor" --report lcov --report html $(MOCHA_CMD) -- test
