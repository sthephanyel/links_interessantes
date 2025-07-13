
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ``,
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
    //   preset: "client",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-urql'
      ],
    }
  }
};

export default config;