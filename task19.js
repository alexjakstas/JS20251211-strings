insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
    pos = 0;
  }
  if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));