import { Button } from "@/components/ui/SearchButton";
import { Input } from "@/components/ui/input";

function InputWithButton() {
  return (
    <div className="inputwithbutton">
      <div>
        <h1 className="Instructor Search">Search For Instructors in your area</h1>
      </div>
      <div>
      <Input type="email" placeholder="Driving Instructors" />
      <Input type="email" placeholder="Where" />
      <Button type="submit">Search</Button>
      </div>
      
    </div>
  );
}

export default InputWithButton;

