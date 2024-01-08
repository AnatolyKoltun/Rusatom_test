import { File } from './Features/Files/types';
import * as server from './server/data';

// eslint-disable-next-line import/prefer-default-export
export const fetchFiles = async (fileName: string): Promise<File[]> => {
  if (fileName) {
    const arr = await server.getData;
    const res = arr.filter((el: any) => fileName === el.fileName);
    return res;
  }
  const res = await server.getData;
  return res;
};

export const fetchGetFile = async (id: number): Promise<File> => {
  const arr = await server.getData;
  const res = arr.find((el: any) => id === el.id);
  console.log(res);
  return res;
};
