COMMANDS_TO_RUN+=('echo 5_deploy.sh ...')
COMMANDS_TO_RUN+=('npx semantic-release --branch $BRANCH')
COMMANDS_TO_RUN+=('bash scripts/bash_runner.sh scripts/gitlab_sync.sh')
COMMANDS_TO_RUN+=('bash scripts/bash_runner.sh scripts/docker_hub.sh')