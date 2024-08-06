FROM node:18-alpine
RUN apk add --no-cache make gcc g++ python3 git openssh

WORKDIR /tokene-graph

COPY docker/package*.json ./

COPY abis ./abis
COPY src ./src
COPY scripts ./scripts
COPY schema.graphql ./
COPY subgraph.yaml ./
COPY tsconfig.json ./

RUN npm install

ENTRYPOINT ["npm", "run"]
