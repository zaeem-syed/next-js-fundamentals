async function  getData(){
    const res= await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();

}

export default async function Page(){
    const data= await getData();
    console.log(data);
    return(
        <main>

            <h1>this is page js file </h1>  
            <table>
                <thead>
                <tr>
                    <th>Lift name</th>
                    <th>Current status </th>
                </tr>    
                </thead> 
                <tbody>
                    {data.map((dummy)=>(    
                        <tr key={dummy.id}>
                            <td>{dummy.name}</td>
                            <td>{dummy.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>          

    </main>
    );
}