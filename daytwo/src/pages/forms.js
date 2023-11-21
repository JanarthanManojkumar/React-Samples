import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const Forms=()=>{
  const schema=yup.object().shape({
        Fullname:yup.string().required("FullName required"),
        Email:yup.string().required("Email Required").email(),
        Age:yup.number().required("Age Required").min(18).required(),
        newPassword:yup.string().required("Password Required").min(6).max(12),
        confirmPassword:yup.string().required("Confirm password Required").oneOf([yup.ref("newPassword"),null],"Passwords dosent match")
    })

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });

    const errorMessage = `${errors.Fullname?.message || ''}
    ${errors.Email?.message || ''}
    ${errors.Age?.message || ''}
    ${errors.newPassword?.message || ''}
    ${errors.confirmPassword?.message || ''}`;

    const onSubmit=(data)=>{
          console.log(data);
    }

    return(
        <div className="forms">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>{errorMessage}</p>
                <input type="text" placeholder="Full Name" {...register("Fullname")}/>
                <input type="text" placeholder="Email"{...register("Email")}/>
                <input type="number" placeholder="Age" {...register("Age")} />
                <input type="text" placeholder="New Password"{...register("newPassword")}/>
                <input type="text" placeholder="Confirm Password"{...register("confirmPassword")}/>
                <input type="submit" />
            </form>
        </div>
        
    );
}