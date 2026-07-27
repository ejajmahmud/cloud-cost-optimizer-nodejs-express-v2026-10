# Enterprise Docker Container for cloud-cost-optimizer-nodejs-express-v2026-10
FROM alpine:3.19
RUN apk add --no-cache bash curl ca-certificates
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "Container active for cloud-cost-optimizer-nodejs-express-v2026-10 (JavaScript / Node.js Express API)"]
