function generator(){
  let num = 1;

  return function(){
    return num++;
  }
}

const generateId = generator();

export {generateId};
