# frontend.prod.dockerfile
FROM node:18-alpine AS builder

WORKDIR /home/node/app

# Copy package files
COPY package*.json ./
COPY *.config.* ./
COPY components.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY src/ ./src/
COPY public/ ./public/

# Build the application
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /home/node/app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy necessary files from builder
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/node_modules ./node_modules
COPY --from=builder /home/node/app/package.json ./package.json
COPY --from=builder /home/node/app/next.config.js ./

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]