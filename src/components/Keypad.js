// Code Keypad Component Here

function Keypad (){

    function handleChange(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <h1>Keypad</h1>
            <input type="password" placeholder="Enter Your password" onChange={handleChange}></input>
        </div>
    )
}
export default Keypad;