import { supabase } from "../supabase/init";

const otp_sign_in = async (email:string, redirect_url:string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
        emailRedirectTo: redirect_url
        }
    })
}


const sign_in = async (email:string, password:string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
};

export default sign_in;