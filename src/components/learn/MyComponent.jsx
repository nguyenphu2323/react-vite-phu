// component = html + css + js
// JSX : 1 parent
//fragment
import './style.css';
const MyComponent = () => {
    // const hoidanit = "eric1"; //String
    // const hoidanit = 25; //Number
    // const hoidanit = true; //Boolean
    // const hoidanit = undefined; 
    // const hoidanit = null; 
    const hoidanit = [1, 2, 3];
    // const hoidanit = {
    //     name: "hoidanit",
    //     age: 20
    // }
    return (
        <>
            <div>{JSON.stringify(hoidanit)} và tý update</div>
            <div>{console.log("PHU")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child</div>
        </>


    )
}



export default MyComponent;