const arr = [1, 2, 3, 4];

const res: number = arr.find(item => item >= 3) as number;

const res2: number = <number>arr.find(item => item >= 3);