import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';


const Shipment = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const auth = useAuth();


    return (


        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="shipment-form">

                <input name="name" ref={register({ required: true })} placeholder="Your Name" defaultValue={auth.user && auth.user.name} />
                {errors.name && <span className="error">Your Name is required</span>}

                <input name="email" ref={register({ required: true })} placeholder="Your Email" defaultValue={auth.user && auth.user.email} />
                {errors.email && <span className="error">Email is required</span>}

                <input name="mobile" ref={register({ required: true })} placeholder="Mobile Number" />
                {errors.mobile && <span className="error">Mobile Number is required</span>}

                <input name="addressLine1" ref={register({ required: true })} placeholder="Address Line 1" />
                {errors.addressLine1 && <span className="error">Address is required</span>}

                <input name="addressLine2" ref={register} placeholder="Address Line 2" />


                <input name="city" ref={register({ required: true })} placeholder="City" />
                {errors.city && <span className="error">City is required</span>}

                <input name="country" ref={register({ required: true })} placeholder="Country" />
                {errors.country && <span className="error">Country is required</span>}

                <input name="zipCode" ref={register({ required: true })} placeholder="Zip / Postal Code" />
                {errors.zipCode && <span className="error">Zip / Postal Code is required</span>}



                <input type="submit"  />


            </form>


            
        </div>




    )







};

export default Shipment;