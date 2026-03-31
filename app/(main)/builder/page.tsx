import { BuilderProvider } from "@/contexts/builderContext";
import FormBuilder from "./components/FormBuilder";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col">
      <BuilderProvider>
        <FormBuilder />
      </BuilderProvider>
    </div>
  );
}
