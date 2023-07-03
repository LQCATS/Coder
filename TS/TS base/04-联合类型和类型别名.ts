type NumStr = number | string;

const arr: NumStr[] = [1, 2, 3, '4'];

function foo(x: NumStr): NumStr {
    return x;
}

export{}