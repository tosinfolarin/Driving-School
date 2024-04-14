import { Button } from "@/components/ui/SearchButton";
import { useState } from "react";

const SearchBar = (props) => {

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
        <form>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static"> Search </button>
                </p>
                <p className="control">
                <input className="control" 
                type="text" 
                onChange={(e) => setTerm(e.target.value)} //this function is called everytime something changes in the text 
                placeholder="Drivers"/>
                    
                </p>
                <div className="control">
                    <div className="button is-static"> Near </div>
                </div>
                <p className="control">
                    <input className="input" 
                    type="text" 
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Where"/>
                </p>
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