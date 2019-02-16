FROM hayd/deno:alpine-0.2.11

EXPOSE 8000

WORKDIR /app
ADD . /app

ENTRYPOINT ["deno", "--allow-net", "server.ts"]
