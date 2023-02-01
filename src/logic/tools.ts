export async function toArrayAsync<T>(generator: AsyncGenerator<T>): Promise<T[]> {
  const result: T[] = [];

  for await (let entry of generator) {
    result.push(entry);
  }

  return result;
}
