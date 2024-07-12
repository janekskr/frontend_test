export const generateNumber = (): number => {
    const numbers: number[] = [0, 1, 2, 3, 4, 5];
    let lastNumber: number | null = null;

    let nextNumber: number;

    do {
        nextNumber = numbers[Math.floor(Math.random() * numbers.length)];
    } while (nextNumber === lastNumber);

    lastNumber = nextNumber;
    return nextNumber;
};