FROM node:14-alpine

# https://nodejs.org/docs/latest-v14.x/api/corepack.html#corepack_enabling_the_feature
RUN corepack enable

WORKDIR /webapp

# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy
COPY ["package.json", "yarn.lock", "/webapp"]

# https://yarnpkg.com/cli/install#examples
RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
