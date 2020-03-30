import React from 'react';
import "./headerAppStyle.css"

const HeaderApp = (props) =>{

    const pronounce=["Aa","Aaaa","E","U","Ea","Eaa","O",
    "Ka","Kha","Ga","Gha","Inga",
    "Cha","Chha","Ja","Jha","Inha",
    "Ta","Tta","Da","Dda","Nha",
    "Tha","Thha","Dha","Dhha","Na",
    "Pa","Ffa","Ba","Bha","Ma",
    "Ya","Ra","Rha","La","Lha","Zha","Va","Sha","Shha","Sa","Ha",
    "Inh","In","Irr","Ill","Ilh"]

    return (
        <div className="headerAppContainer">
            <div>MALLU</div>
            <div>
                {pronounce[props.alphabet]}
            </div>
            <div onClick={()=>{props.clear()}}>
                <img src="/static/images/duster.svg"
                className="icon icon-duster" alt="clean"/>
            </div>
            <div style={{opacity:`${props.alphabet==null?0:1}`}}>
                {props.loading
                    ?<img src={`/static/images/spinner.png`}
                    className="icon icon-spinner" alt="alphabet"/>
                    :<img src={`/static/characters/character (${props.alphabet+1}).svg`}
                    className="icon" alt="alphabet"/>}
            </div>
        </div>
    )
}

export default HeaderApp;