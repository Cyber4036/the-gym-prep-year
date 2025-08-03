


const Switchy =({value, swtch, styl})=>{
    
    

    return (
    <div>
        <button onClick={swtch} className={styl}>{value}</button>
            
    </div>)
}

export default Switchy;