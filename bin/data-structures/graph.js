const Queue = require('./queue');

class Graph{

    constructor(directed=false){
        this.numVertices = 0;
        this.directed = directed;
        this.dict = {}
    }
    addEdge(v1, v2, weight=1){
        let p, q;
       if(v1 in this.dict){
           p = this.dict[v1];
       }
       else {
           p = new Node(v1);
           this.dict[v1] = p;
           this.numVertices ++;
       }
       if(v2 in this.dict){
           q = this.dict[v2];
       }
       else{
           q = new Node(v2);
           this.dict[v2] = q;
           this.numVertices ++;
       }
       p.addEdge(q);
       if(!this.directed){
           q.addEdge(p);
       }

    }

    breadthFirstTraversal(start){
        const queue = new Queue();
        const startNode = this.dict[start];
        queue.offer(startNode);
        const visited = new Set();

        while(!queue.isEmpty()){
            let curr = queue.poll();
            console.log(curr.data);

            if(!visited.has(curr)){
               visited.add(curr);
            }

            [...curr.adjacencySet].map((item)=>{
                if(!visited.has(item)){
                    queue.offer(item);
                }
            })
        }


    }

    depthFirstTraversal(start){
        let curr = this.dict[start];
        const visited = new Set();
        const depthFirstHelper = (visited, curr) =>{

            if(visited.has(curr)){
                return;
            }
            console.log(curr.data);
            visited.add(curr);

            [...curr.adjacencySet].map(item =>{

                depthFirstHelper(visited, item)
            });
        };
        depthFirstHelper(visited, curr);

    }


    getInDegree(v){
        if(!this.dict.hasOwnProperty(v)){
            throw TypeError("Object not present in Graph.")
        }
        let inDegree = 0;
        const p = this.dict[v];
        for(const [ key, value] of Object.entries(this.dict)){
            const vertices = value.adjacencySet;
            if(vertices.has(p)){
                inDegree ++;
            }
        }
        return inDegree;

    }

    stringify(){
        for (const [ key, value ] of Object.entries(this.dict)) {
            console.log(`${key}: ${[...value.adjacencySet].map(x => x.data)}`);
        }

    }

    topologicalSort(){
        const queue = new Queue();
        const inDegreeMap = {};
        for(const [key, value] of Object.entries(this.dict)){
            inDegreeMap[key] = this.getInDegree(key.data);
            if (inDegreeMap[key] === 0){
                queue.offer(value);
            }
        }
        const result = [];
        while(!queue.isEmpty()){
            let curr = queue.poll();
            curr.adjacencySet.forEach((item)=>{
                inDegreeMap[item.key] = inDegreeMap[item.key] -1;
                if (inDegreeMap[item.key] === 0){
                    queue.offer(item);
                }

            })
        }
        if(result.length !== this.numVertices){
            console.log("This graph has cycles.")
        }

    }
}

class Node{
    constructor(data){
        this.data = data;
        this.adjacencySet = new Set();
    }
    addEdge(node){
        this.adjacencySet.add(node)
    }
}

graph = new Graph();
graph.addEdge(12, 13);
graph.addEdge(12, 14);
graph.addEdge(13, 15);
graph.addEdge(14, 6);
graph.stringify();
console.log(graph.getInDegree(12));
graph.breadthFirstTraversal(12);
graph.depthFirstTraversal(12);