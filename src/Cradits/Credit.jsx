
const Credit = ({data}) => {
    // const {name,price,credit}=data
    return (
        <div className="md:w-[25%]">
            <div className="bg-[#ffffff] shadow-xl  p-5">
                <h2 className="font-bold border-b-2 pb-2">Credit Hour remaining: 0 hr</h2>
                
                <div className="py-3">
                <h2 className="font-bold">Course Name:</h2> 
                <ol className="list-decimal p-2 border-b-2">
                {
                    data.map((D,idx)=><li key={idx} className="font-semibold">{D.name}</li>)
                }
                </ol>
                </div>
                 
                <h3 className="font-bold py-2 border-b-2">Total Credit Hour: 15</h3> 

                <h3 className="font-bold py-2 border-b-2">Total Price: {data.reduce((p,c)=>p+c.price,0)} USD</h3> 
              
            </div>
        </div>
    );
};

export default Credit;