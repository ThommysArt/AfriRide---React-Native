import { supabase } from "../supabase/init"

const sign_up = async (email:string, password:string) =>{
    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    });
};

export default sign_up;