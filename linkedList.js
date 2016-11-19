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

  return {
    getHead: getHead,
    getTail: getTail,
    add: add
  };
}