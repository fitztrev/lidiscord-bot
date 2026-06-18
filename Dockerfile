FROM node:25-alpine

RUN apk add --no-cache python3 make g++ sqlite \
    && npm install --global pnpm

COPY . /app
WORKDIR /app

RUN pnpm config set minimum-release-age 0 \
    && pnpm install \
    && pnpm build

CMD ["pnpm", "start"]
