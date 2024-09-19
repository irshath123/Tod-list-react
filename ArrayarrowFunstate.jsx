import React, {useState} from "react";
import'./Tod.css';

const Todo2 = () =>
{
    const [list, setlist] =useState([]);
    const [value, setvalue] =useState('');
    const [edit,setedit] = useState(null);

   function first(){
    if(value !== ""){
        if (edit !== null){
            const editlist=[...list];
            editlist[edit]=value;
            setlist(editlist);
            setedit(null);
            }
            else{
                setlist([...list,value]);

            }
            setvalue("");


        }
    }
    function second(){
        setvalue("");
        setlist([]);

    }
    function earse(index){
        const delist=[...list];
        delist.splice(index,1);
        setlist(delist);

    }
    function edititem(index){
        setedit(index);
        setvalue(list[index]);
        
    }

   


    return(
        <body>
        <div className="container">
        <h1>Todo List</h1>
        
            
            
            <div className="container2">
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <button onClick={first}>{edit !==null?'save' :'Add'}</button>
            <button onClick={second}>Clear</button>
            </div>
         <div className="container3">
            <h3>Tasks...</h3>
            <ul>
                {list.map((item,index)=>(<li key={index}>{item}
                    <button onClick={()=>earse(index)}>delete</button>
                    <button onClick={()=>edititem(index)}>edit</button>
                    </li>
                    ))}
                    </ul>
         </div>
                    
                   
                    </div>

                    </body>
    )

}
export default Todo2;