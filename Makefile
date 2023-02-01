SHELL := /bin/bash
ALL: up

install:
	@docker-compose up -d --build

ps:
	@docker-compose ps

up:
	@docker-compose up -d

build:
	@docker-compose restart api

sh:
	@docker-compose exec api sh

down:
	@docker-compose down

restart: down up

logs:
	@docker-compose logs -f api