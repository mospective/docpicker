import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.local file
dotenv.config({ path: path.resolve(__dirname, '.env.local') });
const graphqlURL = process.env.EXPO_PUBLIC_SCHEMA || "";
const token = process.env.EXPO_PUBLIC_AUTHORIZATION_TOKEN || "";

const config: CodegenConfig = {
  schema: [ {
    [ graphqlURL ]: {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }
  } ],
  documents: [ 'src/services/graphql/**/*.graphql' ],
  generates: {
    './services/generated/graphql.ts': {
      plugins: [ "typescript", "typescript-operations", "urql-introspection", "typescript-urql" ]
    }
  }
};

export default config;