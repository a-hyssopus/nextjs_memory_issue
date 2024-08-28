export const generateHugePayload = (targetMB = 400) => {
    // Approximate size of 1 MB in characters
    const MB_SIZE = 1024 * 1024;

    // Create a character string to repeat
    const charString = 'A'.repeat(100);

    // Calculate the number of repetitions needed
    const repetitions = Math.ceil((targetMB * MB_SIZE) / charString.length);

    return charString.repeat(repetitions);
}