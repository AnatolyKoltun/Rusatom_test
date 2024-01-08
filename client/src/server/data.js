const data = [
  {
    id: 1,
    filename: '01.01.2024.xlsx',
  },
  {
    id: 2,
    filename: '01.02.2024.xlsx',
  },
  {
    id: 3,
    filename: '01.03.2024.xlsx',
  },
  {
    id: 4,
    filename: '01.04.2024.xlsx',
  },
  {
    id: 5,
    filename: '01.05.2024.xlsx',
  },
  {
    id: 6,
    filename: '01.06.2024.xlsx',
  },
  {
    id: 7,
    filename: '01.07.2024.xlsx',
  },
  {
    id: 8,
    filename: '01.08.2024.xlsx',
  },
  {
    id: 9,
    filename: '01.09.2024.xlsx',
  },
  {
    id: 10,
    filename: '01.10.2024.xlsx',
  },
  {
   id: 11,
   filename: '01.11.2024.xlsx',
 },
 {
   id: 12,
   filename: '01.12.2024.xlsx',
 },
 {
   id: 13,
   filename: '01.13.2024.xlsx',
 },
 {
   id: 14,
   filename: '01.14.2024.xlsx',
 },
 {
   id: 15,
   filename: '01.15.2024.xlsx',
 },
 {
   id: 16,
   filename: '01.16.2024.xlsx',
 },
];

// eslint-disable-next-line import/prefer-default-export
export const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 300);
});

getData.then((arr) => arr);
