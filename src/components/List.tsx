import React, { FC } from 'react'
import { myEntryState as myEntryListProps } from '../App' //import the defined entry as alias/props OR Step 2
// import ListItem from './ListItem'

//Step 2
// type myEntryListProps = {//this type or interface goes into the props - we pass this parent myProps to define our :FC<myProps>, then we pass our definedProps to our FC
//   definedEntry: { //entry is array of the below object types
//     name: string
//     age: number
//     imgUrl: string
//     note?: string
//   }[]
// }

//Adding List:FC<myProps> instead of const List = (props: myProps) => {} and destructure entry array ({ entry }) from myProps above.
const List:FC<myEntryListProps> = ({ definedEntry }) => {

  //if we pass our renderList function down to our JSX like below and hover it will give us const renderList: () => JSX.Element[] 
  //we need to structure it this way (): JSX.Element[]
  const renderList = (): JSX.Element[] => (
    definedEntry.map(item => (
       <li className="List" key={item.name}>
        <div className="List-header">
          <img className="List-img" src={item.imgUrl} />
          <h2>{item.name}</h2>
        </div>
        <p>{item.age} years old</p>
        <p className="List-note">{item.note}</p>
      </li>
      // <ListItem
      //   key={item.name}
      //   name={item.name}
      //   age={item.age}
      //   imgUrl={item.imgUrl}
      //   note={item.note}
      // />
    ))
  )

    return (
        <ul className="List-height">
          {renderList()}
        </ul>
    )
}
export default List