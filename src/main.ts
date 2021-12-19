export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000
}

/**
 * 
 * @param {string} name 
 * @param {number=} [delay =Delays.Medium]
 * @returns {Promise<string>}
 */
function delayedHello(name: string, delay: number = Delays.Medium): Promise<string> {
    return new Promise((resolve: (value?: string) => void) => 
        setTimeout(() => resolve(`Hello, ${name}`), delay));
}

export async function greeter(name: string) {
    return await delayedHello(name, Delays.Long);
}