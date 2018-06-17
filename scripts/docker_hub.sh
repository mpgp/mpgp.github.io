COMMANDS_TO_RUN+=('echo Build image and push to hub.docker.com')
COMMANDS_TO_RUN+=('echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin')
COMMANDS_TO_RUN+=('docker build --rm --no-cache -t $DOCKER_IMAGE_OWNER/$DOCKER_IMAGE_NAME -f ./docker/Dockerfile .')
COMMANDS_TO_RUN+=('docker push $DOCKER_IMAGE_OWNER/$DOCKER_IMAGE_NAME')