import type { CodegenConfig } from '@graphql-codegen/cli'
import './env-config.ts'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_BASE_URL,
  documents: ['./src/**/*.{ts,tsx,graphql}', '!**/*.generated.ts'],
  ignoreNoDocuments: true,

  generates: {
    'src/api/types.ts': {
      plugins: ['typescript'],
      config: {
        scalars: {
          DateTime: 'string',
        },
      },
    },

    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'api/types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: true,
        dedupeOperationSuffix: true,
        scalars: {
          DateTime: 'string',
        },
      },
    },
  },
}

export default config
