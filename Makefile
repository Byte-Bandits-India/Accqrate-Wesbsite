setup:
	@echo "\n====> Setting up environment ==================\n"
	@if [ ! -f .env ]; then \
		echo "Creating default .env file..."; \
		echo "NODE_ENV=development" > .env; \
		echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env; \
	fi
	@echo "\n====> Building Containers for local environment ==================\n"
	@docker-compose build --no-cache
	@echo "\n====> Completed Setup for local environment ==============\n"

daemon-mode:
	@echo "\n====> Stopping running containers if any! ==============\n"
	@docker-compose down
	@echo "\n====> Starting Daemon Services using Docker for local environment =======\n"
	@docker-compose up -d
	@echo "\n====> Local Daemon Services Started! =======\n"
	@echo "Frontend: http://localhost:3000"
	@echo "Knowledge Center: http://localhost:3001"

up:
	@echo "\n====> Creating .env file if missing ==================\n"
	@if [ ! -f .env ]; then \
		echo "NODE_ENV=development" > .env; \
		echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env; \
	fi
	@echo "\n====> Taking down running containers if any! ==================\n"
	@docker-compose down
	@echo "\n====> Starting Services using Docker for local environment =============\n"
	@docker-compose up

down:
	@echo "\n====> Taking down any running containers ==============\n"
	@docker-compose down

build-frontend:
	@echo "\n====> Building Frontend (Next.js Build) ==============\n"
	@docker-compose run --rm frontend npm run build

build-knowledge-center:
	@echo "\n====> Building Knowledge Center (Next.js Build) ==============\n"
	@docker-compose run --rm knowledge-center npm run build

frontend-run:
	@echo "\n====> Attaching to Frontend shell =========\n"
	@docker-compose run --rm frontend bash

knowledge-center-run:
	@echo "\n====> Attaching to Knowledge Center shell =========\n"
	@docker-compose run --rm knowledge-center bash

logs:
	@docker-compose logs -f

clean:
	@echo "\n====> Cleaning Docker artifacts ==============\n"
	@docker-compose down -v --remove-orphans
	@docker system prune -f
	@sudo rm -rf node_modules .next

help:
	@echo "Available commands:"
	@echo "  setup                   - Initial project setup"
	@echo "  daemon-mode             - Start services in background"
	@echo "  up                      - Start services in foreground"
	@echo "  down                    - Stop all services"
	@echo "  build-frontend          - Build frontend Next.js app"
	@echo "  build-knowledge-center  - Build knowledge center Next.js app"
	@echo "  frontend-run            - Access frontend container shell"
	@echo "  knowledge-center-run    - Access knowledge center container shell"
	@echo "  logs                    - View all service logs"
	@echo "  clean                   - Clean Docker artifacts"