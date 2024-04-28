import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const BForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }).max(30),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }).max(30),
    email: z.string().email({ message: "Please enter a valid email address" }),
    age: z.number().min(17, { message: "You must be at least 17 years old to book with us." }).max(120, { message: "Please enter a valid age" }),
    postCode: z.string().min(3, { message: "Please enter a valid post code" }).max(8, { message: "Please enter a valid post code" }),
    contactNumber: z.string().min(11, { message: "Please enter a valid contact number" }).max(16),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    const formData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        age: data.age,
        postCode: data.postCode,
        contactNumber: data.contactNumber,
        weekDay: data.weekDay,
        bestContactTime: data.bestContactTime,
        lessonType: data.lessonType,
        lessonPackage: data.lessonPackage,
    };
    console.log(formData);
    setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="thank-you-message">
        <h2>Thank you for your interest! You will be contacted within the next 7 days.</h2>
      </div>
    );
  }

  return (
    <div className="BForm">
      <form onSubmit={handleSubmit(submitData)} className="BForm">
      <h1>
                Book Now 
                </h1>
                <h3> Please fill out the form and you will be contacted within the next 7 days.</h3>
                <label> First Name: </label>
                <input type="text"{...register("firstName")}/>
                {errors.firstName && <span className="errorMessage"> {errors.firstName.message}</span>}

                <label> Last Name: </label>
                <input type="text"{...register("lastName")}/>
                {errors.lastName && <span className="errorMessage"> {errors.lastName.message}</span>}

                <label> Age: </label>
                <input type="number"{...register("age", { valueAsNumber: true })}/>
                {errors.age && <span className="errorMessage"> {errors.age.message}</span>}

                <label> Post Code: </label>
                <input type="text"{...register("postCode")}/>
                {errors.postCode && <span className="errorMessage"> {errors.postCode.message}</span>}

                <label> Contact Number: </label>
                <input type="text" {...register("contactNumber")}/>
                {errors.contactNumber && <span className="errorMessage"> {errors.contactNumber.message}</span>}

                <label> Email: </label>
                <input type="email"{...register("email")}/>
                {errors.email && <span className="errorMessage"> {errors.email.message}</span>}


                <label> What is the best day to contact you?: </label>
                <div>
                <input type="checkbox" id="monday" value="monday" {...register("weekDay")} />
                <label htmlFor="monday">Monday</label>
                <input type="checkbox" id="tuesday" value="tuesday" {...register("weekDay")} />
                <label htmlFor="tuesday">Tuesday</label>
                <input type="checkbox" id="wednesday" value="wednesday" {...register("weekDay")} />
                <label htmlFor="wednesday">Wednesday</label>
                <input type="checkbox" id="thursday" value="thursday" {...register("weekDay")} />
                <label htmlFor="thursday">Thursday</label>
                <input type="checkbox" id="friday" value="friday" {...register("weekDay")} />
                <label htmlFor="friday">Friday</label>
                <input type="checkbox" id="saturday" value="saturday" {...register("weekDay")} />
                <label htmlFor="saturday">Saturday</label>
                <input type="checkbox" id="sunday" value="sunday" {...register("weekDay")} />
                <label htmlFor="sunday">Sunday</label>
                </div>

            
                <label> What is the best time to contact you?: </label>
                <select {...register("bestContactTime")}> 
                <option value="morning">Morning (7am - 12am)</option>
                <option value="afternoon"> Afternoon (12am - 5pm)</option>
                <option value="evening">Evening (5pm - 9pm)</option>
                </select>


                <label> Do you wish to learn manual or automatic?: </label>
                <div>
                <input type="radio" id="manual" value="manual" {...register("lessonType")} />
                <label htmlFor="manual">Manual</label>
                <input type="radio" id="automatic" value="automatic" {...register("lessonType")} />
                <label htmlFor="automatic">Automatic</label>
                </div>


                <label>Which Lesson Package are you interested in?: </label>
                <select {...register("lessonPackage")}>
                <option value="basic">Theory Assistance</option>
                    <option value="basic"> Introduction (4 X 45 minute lessons) - £90</option>
                    <option value="">6 Lessons (3 x 2 hour Lessons) - £195</option>
                    <option value="standard">12 Lessons (6 x 2 hour Lessons) - £384</option>
                    <option value="premium">20 Lessons (10 x 2 hour Lessons) - £630</option>
                </select>

                


                <input type="submit"/>
      </form>
    </div>
  );
};

export default BForm;