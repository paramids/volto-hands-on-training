# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

all: build

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build:
	make build-backend
	make build-frontend

build-frontend:
	yarn

.PHONY: Build Plone 5.2
build-backend:  ## Build Plone 5.2
	(cd api && virtualenv --clear --python=python3 .)
	(cd api && bin/pip install --upgrade pip)
	(cd api && bin/pip install -r requirements.txt)
	(cd api && bin/buildout)

dist:
	yarn
	yarn build

start-built-frontend: dist
	yarn start:prod

start-backend-docker:
	docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.voltodemo" -e ZCML="kitconcept.voltodemo.cors" plone

start-backend-docker-guillotina:
	docker-compose -f g-api/docker-compose.yml up -d

stop-backend-docker-guillotina:
	docker-compose -f g-api/docker-compose.yml down

clean:
	(cd api && rm -rf bin eggs develop-eggs include lib parts .installed.cfg .mr.developer.cfg)
	rm -rf node_modules

.PHONY: start-backend
start-backend: ## Start Plone Backend
	@echo "$(GREEN)==> Start Plone Backend$(RESET)"
	(cd api && PYTHONWARNINGS=ignore bin/instance fg)

.PHONY: all start
