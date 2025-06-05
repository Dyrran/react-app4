import "./Hello.css"
export default function Hello(props){
    return (
         <div className="bg-yellow size ">
        <p style={{ color:"red" }}>Hola mundo {props.content}</p>
      </div>

    )
}


