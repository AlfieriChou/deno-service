##########################################
build:
	@docker build -t deno_service .

start:
	@docker run --rm -p 8000:8000 deno_service
