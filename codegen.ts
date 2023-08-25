
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localHost:3000",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
