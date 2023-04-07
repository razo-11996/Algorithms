const exampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(n)
function exampleLinear(n) {
    for(let i = 0; i < n.length; i++) {
        console.log(n[i])
    }
}
exampleLinear(exampleData);

// O(n^2)
function exampleQuadratic(n) {
    for(let i = 0; i < n.length; i++) {
        console.log(n[i], 'i')
        for(let j = 0; j < n.length; j++) {
            console.log(n[j], 'j')
        }
    }
}
exampleQuadratic(exampleData);

// O(n^3)
function exampleCubic(n) {
    for(let i = 0; i < n.length; i++) {
        console.log(n[i],'i')
        for(let j = 0; j < n.length; j++){
            console.log(n[j], 'j')
            for(let k = 0; k < n.length; k++) {
                console.log(n[k], 'k')
            }
        }
    }
}
// exampleCubic(exampleData)

function exampleLogarithmic(n) {
    for(let i = 2; i <= n.length; i = i * 2) {
        console.log(n[i])
    }
}
exampleLogarithmic(exampleData)