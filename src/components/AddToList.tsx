import React, { FC, useState } from 'react'
import { myEntryState as myEntryAddListProps } from '../App' //import the defined entry as alias/props OR Step 2

//below is identical to the other below type has a shortcut for setEntryProps
// type myEntryAddToListProps = {
//     entryProps: myEntryAddListProps['definedEntry']
//     setEntryPorops: React.Dispatch<React.SetStateAction<{ 
//         name: string;
//         age: number;
//         imgUrl: string;
//         note?: string | undefined;
//     }[]>>
// }

type myEntryAddToListProps = {
    entryProps: myEntryAddListProps['definedEntry']
    setEntryProps: React.Dispatch<React.SetStateAction<myEntryAddListProps['definedEntry']>>
}

// const AddToList:FC<myProps> = ({ entry }) => {
const AddToList:FC<myEntryAddToListProps> = ({ entryProps, setEntryProps }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: '',
    })

    const { name, age, img, note } = input
    
    //() => {} //declare arrow function. First type without event below with const handleChange and 2nd type with event onChange={} onClick={} onSubmit={} ...etc
    
    //function test(){ 
        //return ()
        //handling a normal function all normal functions expect a return element - which expect something to be returend return ()
    //}

    //function test(e){ nothing to be returend : void if we have nothing to be returned
        //handling a function with an event it expect nothing to be returend - nothing to be returend : void
    //}

    // const func = () => { 
        //return()
        //used for handling a normal function - which expect something to be returend retuen ()
    // }

    // const eventFunc = e => { nothing to be returend : void if we have nothing to be returned
        //function used for handling events like onChange, onSubmit, onClick ...etc e.g passing onChange={eventFunc} in our JSX 
    // }

    // OR handling the function in the html like form onSubmit={}, input onChange={} / input is controled value={anything}, button onClick={} itself like below onChange is an event
    
    // 1 - we need to declare the event function
    //<form onSubmit={(e) => {}}></form>
    //<input onChange={(e) => {}} />
    //<button onClick={(e) => {}}></button>
    
    //so we can type this event onChange={(e) => {}} just to get the event type that we need in our function
    //other wise hovering over the e below it will declare any type, which is not good fo ts

    // 2 - onChange={(e) => {}} if we hover over the e on the JSX then it will declare the type we need to pass to our function below const handleChange
    // Add single pipe it means HTMLInputElement OR HTMLTextAreaElement, because we are using the same function to handle change for two different types input and textarea in our JSX
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (!name || !age) { //dont submit item to list if empty !name is same as name === ''
            return
        }
        setEntryProps([ //(property) name/key/identifier: below from the parent entry state we pass our new input state values to the parent entry state like below 
            ...entryProps, //we need copy of the existing entry state
            {
                name: name, //or maybe not sure [e.target.name]: e.target.value
                age: parseInt(age),
                imgUrl: img,
                note: note
            }
        ])
        setInput({
            name: '',
            age: '',
            img: '',
            note: '',
        })
    }

    // <form>
    // <input type="button">
    // <input type="checkbox">
    // <input type="color"> 
    // <input type="date">
    // <input type="datetime-local">
    // <input type="email">
    // <input type="file">
    // <input type="hidden">
    // <input type="image">
    // <input type="month">
    // <input type="number">
    // <input type="password">
    // <input type="radio">
    // <input type="range">
    // <input type="reset">
    // <input type="search">
    // <input type="submit">
    // <input type="tel">
    // <input type="text">
    // <input type="time">
    // <input type="url">
    // <input type="week">
    // </form>
    // <button type = 'button'></button>
    // <button type = 'submit'></button>
    // <button type = 'reset'></button>

    return (
        <div className="AddToList">
            <input
                name="name"
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={name}
                // 3 pass our function here as usual after we declared the event type
                onChange={handleChange} //(e: React.ChangeEvent<HTMLInputElement>)
                //onClick={(e) => {}} //(e: React.MouseEvent<HTMLInputElement, MouseEvent>)
                //onSubmit={(e) => {}} //(e: React.FormEvent<HTMLInputElement>)
            />
            <input
                name="age"
                type="number"
                placeholder="Age"
                className="AddToList-input"
                value={age}
                onChange={handleChange}
            />
            <input
                name="img"
                type="text"
                placeholder="Image URL"
                className="AddToList-input"
                value={img}
                onChange={handleChange}
            />
            <textarea
                name="note"
                //type="text" //- ts doesn't like it
                placeholder="Notes"
                className="AddToList-input"
                value={note}
                onChange={handleChange}
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add Items
            </button>
        </div>
    )
}
export default AddToList