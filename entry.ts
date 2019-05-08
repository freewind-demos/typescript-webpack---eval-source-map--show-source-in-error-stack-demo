function hello(name: string) {
  console.log(`Hello, ${name}!`);
  throw new Error('my-error');
}

hello('webpack');
