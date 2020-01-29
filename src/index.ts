const sub = (...args: number[]) => {
  return args.slice(1).reduce((total, num) => total - num, args[0]);
};

export {
  sub,
};
