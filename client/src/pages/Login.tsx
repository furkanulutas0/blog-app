/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, message } = useAppSelector((state) => state.user);
  const [formData, setFormData] = useState({} as object);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/user/signin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "1234567890",
        },
      });
      const data = await res.json();
      if (data.status == false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data.data));
      navigate("/");
    } catch (error: any) {
      dispatch(signInFailure(error.message));
      return;
    }
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center p-3 ">
      <section>
        <div className="max-w-sm rounded-3xl bg-gray-200 p-16 sm:max-w-6xl sm:p-32 ">
          <div className="flex flex-col items-center justify-center">
            <img src="./loopLogo.png" alt="loopLogo" className="my-2 w-48" />
            <p className="my-2 text-center font-bold">LOOP Blog Giriş Paneli</p>
            <div className="mb-2 h-1 w-3/4 rounded-3xl bg-gradient-to-r from-blue-900 to-purple-500 " />
            <div className="flex flex-col items-center gap-4">
              <p className="font-bold italic text-red-500">{message}</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="my-2 flex max-w-sm flex-col sm:max-w-6xl"
            >
              <p className="mt-2 text-sm font-bold">Email Adresiniz:</p>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="ex. mail@douloop.com"
                className="rounded-lg border border-slate-800 p-2 outline-slate-500  focus:transition-all"
              />
              <p className="mt-2 text-sm font-bold">Şifreniz:</p>

              <input
                type="password"
                onChange={handleChange}
                name="password"
                id="password"
                placeholder=""
                className="w-80 rounded-lg border border-slate-800 p-2 outline-slate-500  focus:transition-all"
              />
              <div className="mt-2">
                {/* <ReCAPTCHA
                  ref={reCaptchaRef}
                  sitekey="6LcZ8ispAAAAANkODUVFf0jEXKjkkbpfFtlkgdr5"
                  onChange={handleRecaptchaVerify}
                /> */}
              </div>
              <button
                type="submit"
                className=" mt-4 rounded-2xl bg-slate-100 p-2 transition-all ease-linear  hover:bg-slate-300 hover:shadow-lg"
              >
                <p className="font-medium  transition-all ease-linear ">
                  Giriş Yap
                </p>
              </button>
            </form>
            <p className="mt-5 text-sm italic">Tüm Hakları Saklıdır!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
