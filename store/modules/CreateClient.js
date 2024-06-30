import { supabase } from "~/store/database/supabase.js";

export const create_client = async (email, password, nickname) => {
    const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data:{
                nickname: nickname
            }
        }
    })
}

export const add_client_database = async (user_data) => {
    try {
        let { error } = await supabase
            .from('users')
            .insert([user_data])
            .select()

        if (error) throw error
    }
    catch (error) {
        return error
    }
}