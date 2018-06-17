COMMANDS_TO_RUN+=('echo 4_script.sh ...')
COMMANDS_TO_RUN+=('echo run tests')
COMMANDS_TO_RUN+=('yarn run ci:e2e')
COMMANDS_TO_RUN+=('yarn run ci:test')

COMMANDS_TO_RUN+=('echo Generate coverage info and deploy it to coveralls.io')
COMMANDS_TO_RUN+=('cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js')

COMMANDS_TO_RUN+=('echo Copy ci files for prevent errors when deploying')
COMMANDS_TO_RUN+=('cp .travis.yml ./dist')
COMMANDS_TO_RUN+=('cp -r .circleci ./dist')