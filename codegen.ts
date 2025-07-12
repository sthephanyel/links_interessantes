
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_HYGRAPQL_API}`,
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