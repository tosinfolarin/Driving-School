import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';
import { useState } from 'react';

const BookingForm = () => {
    let [isInvalid, setInvalid] = useState(false);
 
    return (
        <div className='form-container'>
                
                <h1>
                Book Now 
                </h1>
  
      <Form
        onInvalid={e => {
          e.preventDefault();
          setInvalid(true);
        }}
        onSubmit={e => {
          e.preventDefault();
          setInvalid(false);
        }}
        onReset={() => setInvalid(false)}>
        {isInvalid &&
          <div role="alert" tabIndex={-1} ref={e => e?.focus()}>
            <h3>Unable to submit</h3>
            <p>Please ensure all boxes are filled correctly and re-submit the form.</p>
          </div>
        }
        
        <h3> Personal Details </h3>
        
        <TextField name="firstName" isRequired>
          <Label>First Name:* </Label>
          <Input />
          <FieldError />
        </TextField>
        
        
        <TextField name="lastName" isRequired>
          <Label>Surname:*  </Label>
          <Input />
          <FieldError />
        </TextField>
        
        
        
        <TextField name="firstName" isRequired>
          <Label>Post Code:* </Label>
          <Input />
          <FieldError />
        </TextField>


        <TextField name="firstName" isRequired>
          <Label>Contact Number:* </Label>
          <Input />
          <FieldError />
        </TextField>

        <TextField name="firstName" isRequired>
          <Label>Email Address:* </Label>
          <Input />
          <FieldError />
        </TextField>

        <h3> Lesson Details </h3>

        <TextField name="firstName" isRequired>
          <Label>What is the best day to contact you?:* </Label>
          <Input />
          <FieldError />
        </TextField>

        <TextField name="firstName" isRequired>
          <Label>What is the Best time to contact you?:* </Label>
          <Input />
          <FieldError />
        </TextField>

        <TextField name="firstName" isRequired>
          <Label>Do you wish to learn Manual or Automatic?:* </Label>
          <Input />
          <FieldError />
        </TextField>

    
        <TextField name="firstName" isRequired>
          <Label>Which Lesson Package are you interested in?:* </Label>
          <Input />
          <FieldError />
        </TextField>




        <div style={{display: 'flex', gap: 8}}>
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </div>
      </Form>  

    
      
      
      </div>
      
      
    );
  }



  export default BookingForm;