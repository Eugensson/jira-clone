import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
