class LinkedList {
  constructor() {
    this.pHead = null;
    this.pTail = null;
    this.count = 0;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.pHead) {
      this.pHead = newNode;
      this.pTail = newNode;
    } else {
      this.pTail.tail = newNode;
      this.pTail = newNode;
    }
    this.count++;
  }

  calculateAngles(f_tana) {
    let currentNode = this.pHead;
    const res = []
    while (currentNode) {
      const angle = this.calculateAngle(f_tana, currentNode.value);
      console.log(`${angle} (/10000)`);
      res.push(angle.toFixed(6));
      currentNode = currentNode.tail;
    }
    return res;
  }

  calculateAngle(f_tana, f_tanx) {
    f_tana = math.bignumber(f_tana);
    f_tanx = math.bignumber(f_tanx);
    const fenzi = math.subtract(math.multiply(f_tana, 10000), math.multiply(f_tanx, 10000));
    const fenmu = math.add(1, math.multiply(f_tana, f_tanx));
    return math.divide(fenzi, fenmu);
  }

  clear() {
    let currentNode = this.pHead;
    while (currentNode) {
      const nextNode = currentNode.tail;
      currentNode = nextNode;
    }
    console.log("done!");
    this.pHead = null;
    this.pTail = null;
  }
}

function promptInput(promptMessage) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => readline.question(promptMessage, (ans) => {
    readline.close();
    resolve(ans);
  }));
}

async function main() {
  const list = new LinkedList();
  let index = 1;
  let first = true;
  let f_tana;

  while (true) {
    const input = await promptInput(`请输入第${index++}个数据对(num1,num2)，输入num1=0时退出: `);
    const [num1, num2] = input.split(',').map(Number);
    
    if (num1 === 0) break;

    const res = math.divide(num2, num1);
    if (first) {
      f_tana = res;
      first = false;
    }
    list.addNode(res);
  }

  list.calculateAngles(f_tana);
  list.clear();
}

function calculateTan(points) {
  const list = new LinkedList();
  let index = 1;
  let first = true;

  for (const input of points) {
    const num1 = math.bignumber(input["x"]);
    const num2 = math.bignumber(input["y"]);
    
    if (num1 === 0) break;

    const res = math.divide(num2, num1);
    if (first) {
      f_tana = res;
      first = false;
    }
    list.addNode(res);
  }

  const result = list.calculateAngles(f_tana);
  console.log(`角度计算结果：${result} (/10000)`);
  list.clear();
  return result;
}
