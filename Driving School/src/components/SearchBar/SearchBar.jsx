import { Button } from "@/components/ui/SearchButton";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function SearchBar(props) {


  const [term, setTerm] = useState(props.term || ''); 
    const [location, setLocation] = useState (props.location || '');

    function submit (e) {
        if (typeof props.search === 'function'){
            props.search(term, location);
        }
        console.log(term, location)
        e.preventDefault();
    }




  return (
    <form className="inputwithbutton">
      <div>
        <h1 className="Instructor Search">Search For Instructors in your area</h1>
      </div>
      <div>
      <Input type="text" 
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Driving Instructors" />



      <Input type="text" 
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Where" />
      
      <Button type="submit" onClick={submit}> 
      <div className ="button is-medium">
        <span className="icon is-small"><i className="fas fa-search"></i></span>
      </div>
      </Button>
      </div>

    </form>
  );
}

export default SearchBar;

