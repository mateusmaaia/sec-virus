KERNEL := $$(uname | tr '[:upper:]' '[:lower:]')
DOCKER_IMAGE = mateusmaaia/kerberos
DOCKER_DEV_RUN := docker-compose
DOCKER_API_NAME := kerberos
DOCKER_DEV_LOCAL := docker-compose -f docker-compose.yml -f docker-compose.dev.yml

.PHONY: lint
lint:
	npm run lint

.PHONY: test
test:
	npm run test

.PHONY: test/watch
test/watch:
	npm run test:watch

.PHONY: test/cov
test/cov:
	npm run test:cov

.PHONY: install
install:
	npm install

.PHONY: run
run:
	npm install && NODE_ENV=dev npm start

.PHONY: dev/local
dev/local:
	$(DOCKER_DEV_LOCAL) up --remove-orphans

.PHONY: dev
dev:
	$(DOCKER_DEV_RUN) up --remove-orphans

.PHONY: docker/build
docker/build:
	docker build -t $(DOCKER_IMAGE) -f Dockerfile .
