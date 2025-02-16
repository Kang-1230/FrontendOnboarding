import { Tables } from "../../database.types";
import supabase from "../utils/supabase";

type IUser = Tables<"users">;

//특정한 회원 정보 불러오는 함수
export const fetchUsers = async (id: string): Promise<IUser> => {
  const { data, error } = await supabase
    .from("users")
    .select("nickname, email, id")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  } else {
    console.log("회원 정보 불러오기 성공");
  }
  return data;
};

//회원 정보 저장하는 함수(회원가입)
export const insertUsers = async (
  nickname: string,
  email: string
): Promise<IUser | null> => {
  const { data, error } = await supabase
    .from("users")
    .insert({ nickname, email });

  if (error || null) {
    console.log("회원가입 정보 insert 오류");
    throw error;
  }

  return data;
};

//회원 정보 삭제하는 함수(회원탈퇴)
export const deleteUsers = async (id: string) => {
  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.log("회원탈퇴 실패");
  }
};
