##########################################
imageId = docker images 'deno_service' | uniq

build:
	@docker build -t deno_service .

clean:
	@echo "force clear this docker image..."
	@docker rmi --force $(imageId)

start:
	@docker run --rm -p 8000:8000 deno_service
