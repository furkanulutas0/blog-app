import { MdOutlineContactSupport } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaCheckDouble } from "react-icons/fa";

export function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center p-3 ">
      <section>
        <div className="max-w-sm rounded-3xl bg-gray-200 p-16 sm:max-w-6xl sm:p-32 ">
          <div className="flex flex-col items-center justify-center">
            <MdOutlineContactSupport size={64} />
            <p className="my-2 text-center font-bold">Contact Us</p>
            <div className="mb-2 h-1 w-3/4 rounded-3xl bg-gradient-to-r from-blue-900 to-purple-500 " />

            <form className="my-2 flex max-w-sm flex-col sm:max-w-6xl">
              <p className="mt-2 text-sm font-bold">Email Adresiniz:</p>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="ex. mail@douloop.com"
                className="rounded-lg border border-slate-800 p-2 outline-slate-500  focus:transition-all"
              />
              <p className="mt-2 text-sm font-bold">Mesajınız:</p>

              <textarea
                name="message"
                id="message"
                placeholder=""
                className="max-h-64 min-h-28 w-80 rounded-lg border border-slate-800 p-2 outline-slate-500  focus:transition-all"
              />
              <div className="mt-2">
                {/* <ReCAPTCHA
                  ref={reCaptchaRef}
                  sitekey="6LcZ8ispAAAAANkODUVFf0jEXKjkkbpfFtlkgdr5"
                  onChange={handleRecaptchaVerify}
                /> */}
              </div>
              <div>
                <input
                  id="default-checkbox"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  type="checkbox"
                  checked={checkbox}
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    KVKK
                  </span>{" "}
                  Sözleşmesini okudum ve kabul ediyorum.
                </label>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSentMail(true);
                }}
                className=" mt-4 rounded-2xl bg-slate-100 p-2 transition-all ease-linear  hover:bg-slate-300 hover:shadow-lg"
              >
                <p className="font-medium  transition-all ease-linear ">
                  Gönder
                </p>
              </button>
            </form>
            <p className="mt-5 text-sm italic">Tüm Hakları Saklıdır!</p>
          </div>
        </div>
      </section>
      <section className="hidden">
        <div className="flex max-w-sm flex-col justify-center rounded-3xl bg-gray-200 p-5 sm:min-h-[38.5rem] sm:min-w-[32rem] sm:max-w-6xl sm:p-14">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="./loopLogo.png"
              alt="loopLogo"
              className="my-2 w-36 p-6 sm:w-48 sm:p-2"
            />
            <p className="font-bold">Bilgileriniz kontrol ediliyor...</p>
            <img
              src="./loading.gif"
              alt="loading"
              className="w-16 max-w-sm rounded-full transition-all ease-linear hover:w-14 sm:max-w-6xl"
            />
          </div>
        </div>
      </section>
      <section>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={checkbox}
              onClick={() => {
                setOpenModal(false);
                setCheckbox(true);
              }}
            >
              {checkbox ? "Kabul Edildi" : "Kabul Et"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={sentMail}
          size="md"
          onClose={() => setSentMail(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <FaCheckDouble className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                We have received your message. We will get back to you as soon.
              </h3>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
}
