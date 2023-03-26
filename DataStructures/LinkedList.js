class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
    
    getHead(){
        return this.head;
    }
    
    setHead(head){
        this.head = head;
    }
    
    size(){
        let iterator = this.head;
        let count = 0;

        while(iterator != null){
            count++;
            iterator = iterator.next;
        }

        return count;
    }

    prepend(value){
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
    }

    append(value){
        let iterator = this.head;
        
        if(iterator === null){
            this.prepend(value)
        }else{
            while(iterator !== null){
                if(iterator.next === null){
                    let new_node = new Node(value);
                    iterator.next = new_node;
                    break;
                }
                iterator = iterator.next;
            }
        } 
    }

    insert(value, index){
    
        if(index === 0){
            this.prepend(value);
        }
        else if(index === this.size()){
            this.append(value);
        }
        else if(index > this.size()){
            console.log('Index does not exist');
        }else{
            let iterator = this.head;
            let count = 0;
            let previous = null;

            while(iterator != null){
                
                if(index === count){
                    let new_node = new Node(value);
                    previous.next = new_node;
                    new_node.next = iterator;
                    break;
                }
                
                count++;
                previous = iterator;
                iterator = iterator.next;
            }
        }
    }

    delete_by_index(index){        
        
        if(this.size < 1){
            console.log('List is empty');
        }
        else if(index === 0){
            this.head = this.head.next
        }
        else if(index >= this.size()){
            console.log('Index does not exist');
        }else{
            let iterator = this.head;
            let count = 0;
            let previous = null;

            while(iterator != null){
                
                if(index === count){
                    previous.next = iterator.next;
                    break;
                }
                
                count++;
                previous = iterator;
                iterator = iterator.next;
            }
        }
    }

    delete_by_value(value) {

        let iterator = this.head;
        let previous = null;

        while (iterator != null) {

            if (value === iterator.value) {
                
                (previous === null) ? this.head = iterator.next : previous.next = iterator.next;

                break;
            }

            previous = iterator;
            iterator = iterator.next;
        }
    }

    print(){
        let iterator = this.head;
        let nodes = [];

        while(iterator !== null){
            
            if(iterator === this.head){
                nodes.push(`[Head: ${iterator.value}] ->`);
            }
            else if(iterator.next === null){
                nodes.push(`[Tail: ${iterator.value}]`);
            }
            else{
                nodes.push(`[${iterator.value}] ->`);
            }

            iterator = iterator.next;
        }

        console.log(nodes);
    }

    search(value){
        let iterator = this.head;
        
        while(iterator != null){
            
            if(iterator.value === value){
                return iterator;
            }

            iterator = iterator.next;
        }

        return null;
    }
}

function reverse(list){
    previous = null;
    current = list.getHead();

    while(current !== null){
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    list.setHead(previous);
}

let list = new LinkedList();
list.append(50);
list.append(68);
list.append(70);
list.append(14);
list.print();
list.delete_by_value(70);
list.print();





