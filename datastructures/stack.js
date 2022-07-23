export class Stack {
  #index = 0;
  #stack = [];

  get isEmpty() {
    return this.#index === 0;
  }

  push(value) {
    this.#stack.push(value);
    ++this.#index;
  }

  pop() {
    const value = this.#stack[this.#index - 1];
    this.#stack[this.#index - 1] = undefined;
    --this.#index;
    return value;
  }

  peek() {
    return this.#stack[this.#index - 1];
  }
}
