import { File } from './types';

export type State = {
  file: File | undefined;
  files: File[] | undefined;
  error: string | undefined;
};
