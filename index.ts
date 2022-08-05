const obj = {
  name: 'abd',
  age: 22,
} as const;

// can't edit this object, every property is readonly
// obj.a = 'nn';

const arr = ['h', 'e', 'y'] as const;

// can't edit this array, it's a readonly tuple
// arr[0] = ';';
