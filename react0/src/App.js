//const products = [
//  { title: 'Cabbage', isFruit: false, id: 1 },
//  { title: 'Garlic', isFruit: false, id: 2 },
//  { title: 'Apple', isFruit: true, id: 3 },
//];
//
//export default function ShoppingList() {
//  const listItems = products.map(product =>
//    <li
//      key={product.id}
//      style={{
//        color: product.isFruit ? 'magenta' : 'darkgreen'
//      }}
//    >
//      {product.title}
//    </li>
//  );
//
//  return (
//    <ul>{listItems}</ul>
//  );
//}

// --------------------------------------------------------

//import {useState} from 'react';
//
//export default function MyApp(){
//    return (
//        <div>
//            <h1> Counters that update separately </h1>
//            <MyButton />
//            <MyButton />
//            <ResetButton />
//        </div>
//    );
//}
//
//function MyButton(){
//    const [count, setCount] = useState(0);
//
//    function handleClick(){
//        setCount(count + 1);
//    }
//
//    return (
//        <button onClick={handleClick}>
//            Clicked {count} times
//        </button>
//    );
//}


import {useState} from 'react';

export default function MyApp(){
    const [counts, setCounts] = useState([0, 0]);

    function handleReset(){
        setCounts([0, 0]);
    }

    return (
        <div>
            <h1> Counters that update separately </h1>
            <MyButton index={0} count={counts[0]} setCount={setCounts} />
            <MyButton index={1} count={counts[1]} setCount={setCounts} />
            <ResetButton onReset={handleReset} />
        </div>
    );
}

function MyButton(props){
    const {index, count, setCount} = props;

    function handleClick(){
        setCount(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = newCounts[index] + 1;
            return newCounts;
        });
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

function ResetButton(props){
    const {onReset} = props;

    return (
        <button onClick={onReset}>
            Reset
        </button>
    );
}
