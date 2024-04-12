class Node {
    constructor(value = null) {
        this.value = value;
        this.tail = null;
    }
}

class LinkedList1 {
    constructor() {
        this.pHead = null;
        this.pTail = null;
        this.count = 0;
        this.AV = 0;  // Average
        this.FC = 0;  // Variance
        this.BQ = 0;  // Standard Deviation
        this.row_BQ = 0;
        this.Ex = 0;  // Relative uncertainty
        this.t_m = 0;
    }

    addNode(number) {
        const newNode = new Node(number);
        if (!this.pHead) {
            this.pHead = newNode;
            this.pTail = newNode;
        } else {
            this.pTail.tail = newNode;
            this.pTail = newNode;
        }
        this.count++;
    }

    calculateAverage() {
        let sum = 0;
        let current = this.pHead;
        while (current !== null) {
            sum += current.value;
            current = current.tail;
        }
        this.AV = sum / this.count;
    }

    calculateVariance() {
        let sum = 0;
        let current = this.pHead;
        while (current !== null) {
            let delta = (current.value - this.AV) * 1000;  // scaled difference
            sum += math.pow(delta, 2);
            current = current.tail;
        }
        this.FC = sum;
        this.BQ = math.sqrt(sum / (this.count * (this.count - 1)));
        this.row_BQ = this.BQ;
        this.BQ = this.BQ * this.t_m;  // applying correction factor
    }

    calculateRelativeUncertainty() {
        this.Ex = this.BQ / this.AV;
    }

    setCorrectionFactor(t_set) {
        this.t_m = t_set[this.count] || 1;  // default to 1 if index out of bounds
    }

    printStatistics() {
        console.log(`平均数是 ${this.AV.toFixed(6)}`);
        console.log(`方差是 ${(this.FC / 1e6).toFixed(6)} (/10**6)`);
        console.log(`未乘以系数的绝对不确定度是 ${(this.row_BQ / 1e3).toFixed(6)} (/10**3)`);
        console.log(`绝对不确定度是 ${(this.BQ / 1e3).toFixed(6)} (/10**3)`);
        console.log(`相对不确定度是 ${(this.Ex / 1e3).toFixed(6)} (/10**3)`);
        console.log(`根据数据个数， t(m)是\n ${this.t_m.toFixed(6)}`);
    }

    freeList() {
        let current = this.pHead;
        while (current !== null) {
            let next = current.tail;
            current = next;
        }
        console.log("done!");
    }
}

function main() {
    const list = new LinkedList1();
    const t_set = [0,0,1.84,1.32,1.20,1.14,1.11,1.09,1.08,1.07,1.06,0,1.05,0,0,1.04,0,0,0,0,1.03,1];
    
    console.log("请输入数据，输入零表示退出");

    while (true) {
        const number = parseFloat(prompt(`输入第${list.count + 1}个数据: `));
        if (number === 0) break;
        list.addNode(number);
    }

    list.calculateAverage();
    list.setCorrectionFactor(t_set);
    list.calculateVariance();
    list.calculateRelativeUncertainty();
    list.printStatistics();
    list.freeList();
}


function calculateStatistics(number_list) {
    const list = new LinkedList1();
    const t_set = [0,0,1.84,1.32,1.20,1.14,1.11,1.09,1.08,1.07,1.06,0,1.05,0,0,1.04,0,0,0,0,1.03,1];
    for(const number of number_list) {
        list.addNode(number);
    }

    list.calculateAverage();
    list.setCorrectionFactor(t_set);
    list.calculateVariance();
    list.calculateRelativeUncertainty();

    const average = list.AV.toFixed(6);
    const variance = (list.FC / 1e6).toFixed(6);
    const row_bq = (list.row_BQ / 1e3).toFixed(6);
    const bq = (list.BQ / 1e3).toFixed(6);
    const ex = (list.Ex / 1e3).toFixed(6);
    const t_m = list.t_m.toFixed(6);

    list.printStatistics();
    list.freeList();

    return [average, variance, row_bq, bq, ex, t_m];
}
