import { Button } from "@/components/ui/SearchButton";
import { Input } from "@/components/ui/input";

function InputWithButton() {
  return (
    <div className="inputwithbutton">
      <div>
        <h1 className="Instructor Search">Search For Instructors in your area</h1>
      </div>
      <div>
      <Input type="item" placeholder="Driving Instructors" />
      <Input type="area" placeholder="Where" />
      
      <Button type="submit">
      <div className ="button is-medium">
        <span className="icon is-small"><i className="fas fa-search"></i></span>
      </div>
      </Button>
      </div>

    </div>
  );
}

export default InputWithButton;

