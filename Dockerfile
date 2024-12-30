FROM node:18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN ls -la /app

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "dev"]