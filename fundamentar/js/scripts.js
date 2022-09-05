// comentário em linha 

/* 
comentário em bloco
*/

{
    let name, age

    name = "Ivan"
    age = 20

    console.log(name + ' tem ' + age + ' anos.')

    console.log(`o ${name} tem ${age} anos.`)
}

{
    const person = {
        name: "Ivan",
        age: 20,
        height: "1,85m",
        weight: "70kg"
    }
    // objects

    console.log(`${person.name} tem ${person.age} anos`)
}

{
    const animals = [
        'Lion',
        'Tiger',
        'Cat'
    ]
    // arrays --> listas 

    console.log(animals[2])
}

{
    function createPhrases() {
        console.log('criando frases')
    }
    // criando uma função 

    createPhrases()
    createPhrases()
    // chamando a função varias vezes 
}

{
    //function expression

    //parameters
    const sum = function (number1, number2) {
        console.log(number1 + number2)
    }

    // arguments
    sum(2, 3)
}

{
    const sayMyName = (name) => {
        console.log(name)
    }

    sayMyName('Ivan')

    // arrow function
}

{
    function sayMyName(name) {
        console.log('antes de executar a função callback')
        name()
        console.log('depois de executar a função callback')
    }
    sayMyName(
        () => {
            console.log('estou em uma callback')
        }
    )
}