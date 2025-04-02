FROM node:22.11.0-alpine
WORKDIR /app
COPY .output .output
CMD ["node", ".output/server/index.mjs"]