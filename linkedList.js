/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    var curNode = head;
    while(curNode !== null){
      if(curNode.next !== null){
        curNode = curNode.next;
      } else {
        return curNode;
      }
    }
    return curNode;
  }

  function add(Value) {
    var tail = getTail();
    var newNode = {
      value: Value,
      next: null
    };
    if (head === null) {
      head = newNode;
    } else {
      tail.next = newNode;
      }
    return newNode;
  }

  function get(num) {
    var curNode = head;
    var count = 0;
    while (count < num){
      if(curNode.next !== null){
        count++;
        curNode = curNode.next;
      }else{
        return false;
      }
    }
    return curNode;
  }

  function remove(num) {
    var curNode = get(num);
    var prevNode = get(num - 1);
    if (curNode === false){
      return false;
    }else if(num === 0) {
      head = curNode.next;
    }else{
      prevNode.next = curNode.next;
    }
  }

  function insert(Value, num) {
    var curNode = get(num);
    var prevNode = get(num - 1);
    var newNode = {
      value: Value,
      next: curNode
    };
    if(curNode === false || num < 0){
      return false;
    }else if(num === 0){
      head = newNode;
    }else {
      prevNode.next = newNode;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}