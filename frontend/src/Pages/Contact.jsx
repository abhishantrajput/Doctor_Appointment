import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-10 lg:mb-16 font-light text-center text__para">
          Got a technical issue? want to send feedback about the issue? let us
          Know
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__Label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__Input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__Label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__Input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__Label">
              Your Message
            </label>
            <textarea
              type="text"
              rows="5"
              id="message"
              placeholder="Leave a comment..."
              className="form__Input mt-1"
            />
          </div>

          <button type="submit" className="btn rounded-none sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
