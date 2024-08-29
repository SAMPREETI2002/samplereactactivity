function AboutUs()
{
    let usernames=["Peter Doe","Joes erric","Samuel R","J Marco R"]

      return (<div><h3>
        
        App developed by </h3>
         
         {usernames.map((e)=>{
            return <li>Mr {e}</li>
         })}
      </div>)
}
export default AboutUs