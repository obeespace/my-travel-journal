import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"

export default function App(){
    var dataHold = data.map(function(info){
        return <Card key={info.key} {...info}/>
    });
    return (
        <div>
            <Nav />
            {dataHold}
        </div>
    )
}