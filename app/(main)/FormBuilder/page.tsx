import Form from "./components/Form";
import Navbar from "./components/Navbar";

export default function page() {
  return (
    <>
      <div className=" w-full h-screen py-5 px-10">
        <Navbar />
        <Form />
      </div>
    </>
  );
}
