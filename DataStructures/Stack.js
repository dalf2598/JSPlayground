class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return (this.items.length == 0) ? "Empty": this.items.pop();
    }

    peek(){
        return this.items[this.items.length -1 ]
    }

    isEmpty(){
        return this.items.length == 0;
    }

    print(){
        console.log('Stack');
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

stack.pop();

stack.print();