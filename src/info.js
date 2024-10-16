export default function Info(){
    const title="Inventory Management System.";
    const show_title=true;
  
    if(show_title){
      return(
        <div>
          <h1>{show_title ?title:"No title"}</h1>
          <p>Manage your stuff.</p>
        </div>
      );
    }else{
      return <p>Empty</p>
    }
    
}